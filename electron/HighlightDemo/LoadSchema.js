export class LoadSchema {
    // 策略加载类
    suggestions = [];
    actionfilter = [];
    funcmap = new Map();
    cursug = []; // 用于判断现在应该展示哪个建议


    constructor(xmlmsg) {
        this.actionfilter = ['ps', 'dir', 'file', 'key', 'value',
            'acc', 'svc', 'net', 'task', 'dev'];

        this.funcmap.set('classes', this.#pvt_ParseClass);
        this.funcmap.set('attributes', this.#pvt_ParseAttribute);
        this.funcmap.set('actions', this.#pvt_ParseAction);
        this.funcmap.set('methods', this.#pvt_ParseMethod);

        this.ParseXml(xmlmsg);
    }


    ParseXml(xmlmsg) {
        this.suggestions.splice(0,this.suggestions.length);

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlmsg, 'text/xml');
        const body = xmlDoc.documentElement;
        const elements = body.childNodes;

        for (let i = 0; i < elements.length; i++) {
            if(elements[i].nodeName === '#text') {
                continue;
            }
            if(this.funcmap.has(elements[i].nodeName)) {
                this.ParseFunc = this.funcmap.get(elements[i].nodeName);
                this.ParseFunc(elements[i]);
            }
        }
    }

    // 解析路径
    ParsePath(sugpath) {
        var res_path = sugpath[sugpath.length - 1];
        if(res_path === '.') {
            res_path = '';
        }
        for (let i = sugpath.length - 2; i >= 0; i--) {
            if(/[a-zA-Z]/.test(sugpath[i]) || sugpath[i] === '.') {
                res_path = sugpath[i] + res_path;
            } else {
                break;
            }
        }
        return res_path;
    }

    // 获取建议,可通过exsugtype，type主要是对主路径的设置，扩展类型，指定需要显示的建议
    GetSuggestion(sugpath = null, exsugtype = null) {
        var newsug = [];
        var ressug = [];
        var path = [];
        if(sugpath) {
            sugpath = this.ParsePath(sugpath);
            path = sugpath.split('.');
        }
        if(path === null) {
            return [];
        }

        if(this.actionfilter.indexOf(path[0]) >= 0) {
            if(path.length > 1) {
                path[1] = path[0] + '.' + path[1];
                path = path.slice(1);
            }
        }

        if(path[0] === 's' || path[0] === 'o') {
            path[0] = 'a';
        } else {
            var temppath = path;
            path = [];
            if(exsugtype) {
                path.push(exsugtype);
            } else {
                path.push('m');
            }
            path.push(...temppath);
        }
        for (let i = 0; i < this.suggestions.length; i++) {
            if(this.suggestions[i].name.split('.').indexOf(path[0]) >= 0) {
                newsug.push(...this.suggestions[i].para);
            }
        }

        for (let i = 1; i < path.length; i++) {
            var tempsug = [];
            for (let j = 0; j < newsug.length; j++) {
                if(newsug[j].name === path[i]) {
                    tempsug.push(...newsug[j].para);
                }  
            }
            newsug = tempsug;
        }

        for (let i = 0; i < newsug.length; i++) {
            ressug.push(this.GenerateSug(newsug[i].name,
                newsug[i].name, newsug[i].desc));
        }

        return ressug;
    }

    GetClass() {
        var classsug = [];
        for (let i = 0; i < this.sclass.length; i++) {
            classsug.push(this.GenerateSug(this.sclass[i].class_name,
                this.sclass[i].class_name, this.sclass[i].desc));
        }
        return classsug;
    }

    #pvt_ParseClass(xmlelem) {    
        this.suggestions.push({name: 'a', desc: 'classes', para: []});
        const sugid = this.suggestions.length - 1;
        var sclass = this.suggestions[sugid].para;

        const elems = xmlelem.childNodes;
        for (let i = 0; i < elems.length; i++) {
            if(elems[i].nodeName === '#text') {
                continue;
            }

            const element = elems[i];

            const class_name = element.getAttribute('name');
            const desc = element.getElementsByTagName('desc')[0].textContent;
            const attrs = element.getElementsByTagName('attrs')[0].childNodes;

            // this.sclass.push(this.#pvt_GenerateSug(class_name, class_name, desc));
            

            var arr_attrs = [];

            for(let j = 0; j < attrs.length; j++) {
            // attrs.forEach.call(function(attr) {
                if(attrs[j].nodeName === '#text') {
                    continue;
                }
                const attr = attrs[j];
                arr_attrs.push({name: attr.getAttribute('name'),
                 desc: attr.getAttribute('typename'),
                 para: []});
            }
            sclass.push({name: class_name, desc: desc, para: arr_attrs});
        }
    }

    #pvt_ParseAttribute(xmlelem) {
        this.suggestions.push({name: 'a', desc: 'attributes', para: []});
        const sugid = this.suggestions.length - 1;
        var attribute = this.suggestions[sugid].para;

        const elems = xmlelem.getElementsByTagName('attr');
        for (let i = 0; i < elems.length; i++) {
            const element = elems[i];

            const name = element.getAttribute('name');
            const desc = element.getAttribute('desc');
            const values = element.getElementsByTagName('value');

            // this.sclass.push(this.#pvt_GenerateSug(class_name, class_name, desc));
            

            var arr_value = [];

            for(let j = 0; j < values.length; j++) {
            // attrs.forEach.call(function(attr) {
                const value = values[j];
                arr_value.push({name: value.getAttribute('sym'),
                 desc: value.textContent,
                 para: []});
            }
            attribute.push({name: name, desc: desc, para: arr_value});
        }
    }

    #pvt_ParseAction(xmlelem) {
        this.suggestions.push({name: 'm', desc: 'actions', para: []});
        const sugid = this.suggestions.length - 1;
        var action = this.suggestions[sugid].para;

        const elems = xmlelem.getElementsByTagName('action');
        for (let i = 0; i < elems.length; i++) {
            const element = elems[i];

            const name = element.getAttribute('sym');
            const desc = element.getAttribute('name');
            const params = element.getElementsByTagName('param');

            // this.sclass.push(this.#pvt_GenerateSug(class_name, class_name, desc));
            var arr_param = [];

            for(let j = 0; j < params.length; j++) {
            // attrs.forEach.call(function(attr) {
                const param = params[j];

                const param_name = param.getAttribute('name');
                const param_desc = param.getAttribute('desc')

                arr_param.push({name: param_name,
                 desc: param_desc,
                 para: []});

                var arr_value = arr_param[arr_param.length - 1].para;

                const values = param.getElementsByTagName('value');

                for (let k = 0; k < values.length; k++) {
                    const value = values[k];

                    arr_value.push({name: value.getAttribute('sym'),
                     desc: value.textContent,
                     para: []});
                    
                }

            }
            action.push({name: name, desc: desc, para: arr_param});
        }
    }

    #pvt_ParseMethod(xmlelem) {
        
        this.suggestions.push({name: 'm.a', desc: 'methods', para: []});
        const sugid = this.suggestions.length - 1;
        var method = this.suggestions[sugid].para;

        const elems = xmlelem.getElementsByTagName('method');
        for (let i = 0; i < elems.length; i++) {
            const element = elems[i];

            const name = element.getAttribute('name');
            const desc = element.getAttribute('desc');
            const params = element.getElementsByTagName('param');

            var arr_param = [];

            for(let j = 0; j < params.length; j++) {
                const param = params[j];
                const param_name = param.getAttribute('name');
                const param_desc = param.getAttribute('desc');

                arr_param.push({name: param_name,
                 desc: param_desc,
                 para: []});

                var arr_value = arr_param[arr_param.length - 1].para;

                const values = param.getElementsByTagName('value');

                for (let k = 0; k < values.length; k++) {
                    const value = values[k];
                    arr_value.push({name: value.getAttribute('sym'),
                     desc: value.textContent,
                     para: []});
                }

            }
            method.push({name: name, desc: desc, para: arr_param});
        }

    }

    GenerateSug = function(strlabel, text, desc) {
        return {
            label: strlabel,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: text,
            detail: desc
        }
    }

}

