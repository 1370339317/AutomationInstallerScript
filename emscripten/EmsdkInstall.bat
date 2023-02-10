cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
emsdk_env.bat
setx "Path" "%cd%;%path%" /m