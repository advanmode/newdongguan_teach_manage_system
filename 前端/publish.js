	// һ���������

    module.exports = function () {
        let O           = 'xxx',  // �ļ���
            Q           = require('q'),
            del         = require('del'),
            gulp        = require('gulp'),
            zip         = require('gulp-zip'),
            node_ssh    = require('node-ssh'),
            colors      = require('colors/safe'),
            dateFormat  = require('dateformat'),
            argv        = process.argv,
            fs          = require('fs'),
            path        = require('path'),
            exec        = require('child_process').exec,
            IPs			= [{
                host: 'xx.xx.xx.xx',  // �пص�ַ
                post: 22,
                user: 'root',
                dist: '/root',
                privateKey: '/Users/.ssh/id_rsa'   //  ����ssh
            }],
            SERVER 		= {
                // �������д���������
                'test': {   
                    type: 'test', 
                    host: 'xx.xx.xx.xx',  // ��������ַ
                    port: 22,
                    user: '',
                    dist: '/xx',  // ·��
                    privateKey: ''
                }
            },
            center 		= new node_ssh(),
            zipfile 	= O + '-' + dateFormat(new Date(), 'yyyy-mm-dd-HH-MM-ss') + '.zip';
    
            if ('publish' !== argv[2]) {
                process.stdout.write(colors.green('Do you mean "publish"?\n'));
                return
            }
    
            if (!SERVER[argv[3]]) {
                process.stdout.write(colors.green('\x20SERVER REQUIRED!\n'));
                process.stdout.write(colors.blue('\x20-node dist.publish.js test\n'));
                process.stdout.write(colors.blue('\x20-node dist.publish.js prod\n'));
                return
            }
            IPs.push(SERVER[argv[3]]);
            const testFilename = 'devdata.json',
                  prodFilename = 'prodata.json'
                  newname = 'domaindata.json',
                  destPath = path.join(__dirname, './src/views/activity/', newname),
                  sourceFile = ''
     
            // ��һ����build
            var BUILD = function () {
                var defered = Q.defer();
                process.stdout.write(colors.green('1��: build -> \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 build project...\n'));
                exec('npm run build', function(error, stdout, stderr) {
                    process.stdout.write(colors.green('\x20\x20\x20 success\n'));
                    defered.resolve(true);
                });
                return defered.promise;
            }
    
            // �ڶ�������build��distĿ¼�µ��ļ�copy��zip��������yx-page
            var COPYTOZIP = function () {
                var deferred = Q.defer();
                process.stdout.write(colors.green('2. copy -> \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 copy...\n'));
                gulp.src(['./dist/**'])
                    .pipe(gulp.dest('zip/yx-page'))
                    .on('finish', function () {
                        process.stdout.write(colors.green('\x20\x20\x20 copy successfully!\n'));
                        deferred.resolve(true);
                    })
                    .on('error', function (error) {
                        deferred.reject(new Error(error));
                    })
                return deferred.promise
            }
    
            // �����������ѹ��zip�ļ������yx-page
            var ZIPFILE = function () {
                var deferred = Q.defer();
                process.stdout.write(colors.green('3. zipfile -> \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 zip packing...\n'));
                gulp.src([
                    'zip/**'
                ])
                .pipe(zip(zipfile))
                .pipe(gulp.dest('zip'))
                .on('finish', function () {
                    process.stdout.write(colors.green('\x20\x20\x20 zip packed successfully!\n'));
                    deferred.resolve(zipfile);
                })
                .on('error', function () {
                    process.stdout.write(colors.red('\x20\x20\x20 zip packed field!\n'));
                    deferred.reject(new Error(error));
                });
                return deferred.promise;
            }
    
            // ���Ĳ����ϴ����п�
            var UPLOAD = function (file) {
                var deferred = Q.defer();
                process.stdout.write(colors.green('4. upload: \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 upload ' + file + ' to ' + IPs[0].host + '...\n'));
                exec('scp ./zip/' + file + ' ' + IPs[0].user + '@' + IPs[0].host + ':' + IPs[0].dist, function (error, stdout, stderr) {
                    process.stdout.write(colors.blue('\x20\x20\x20 upload to ' + IPs[0].host + 'successfully! \n'));
                    deferred.resolve(file)
                })
                return deferred.promise;
            }
    
            // ���岽�������пػ�
            var CONNECT = function (file) {
                var deferred = Q.defer();
                process.stdout.write(colors.green('5. login: \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 login ' + IPs[0].host + '...\n'));
                center.connect({
                    host: IPs[0].host,
                    port: IPs[0].port,
                    username: IPs[0].user,
                    privateKey: IPs[0].privateKey
                }).then( () => {
                    process.stdout.write(colors.blue('\x20\x20\x20 welcome to ' + IPs[0].host + '!\n'));
                    deferred.resolve(file);
                })
                return deferred.promise
            }
    
            // ����������ѹ�ļ�
            var UNZIPFILE = function (file) {
                var deferred = Q.defer();
                process.stdout.write(colors.green('6. unzip: \n'));
                center.exec('unzip -o ' + IPs[0].dist + '/' + file)
                .then(function (result) {
                    process.stdout.write(colors.blue('\x20\x20\x20 unzip successfully! \n'));
                    deferred.resolve(file);
                });
                return deferred.promise;
            }
    
            // ���𲽣����ļ�������������
            var COPYTOSERVER = function (file) {
                var deferred = Q.defer();
                process.stdout.write(colors.green('7. copy to server: \n'));
                process.stdout.write(colors.blue('\x20\x20\x20 copy '+ O +' to ' + IPs[1].host + '!\n'));
                center.exec('scp -r ' + IPs[0].dist + '/' + O + ' ' + IPs[1].host + ':' + IPs[1].dist)
                .then(function (result) {
                    process.stdout.write(colors.blue('\x20\x20\x20 copy successfully!\n'));
                    deferred.resolve(file);
                });
                return deferred.promise;
            }
    
            // �ڰ˲���ɾ������ļ�
            var DELZIPSERVERFILE = function (file) {
                var deferred = Q.defer();
                process.stdout.write(colors.green('8. del zip.file: \n'));
                center.exec('rm -rf ' + file + ' ' + O + '/').then(function (result) {
                    process.stdout.write(colors.blue('\x20\x20\x20 del successfully!\n'));
                    deferred.resolve(true);
                    delDir('zip')
                });
                return deferred.promise;
            }
            // �ھŲ����ɹ���ʾ
            var SUCCESS = function () {
                var deferred = Q.defer();
                center.dispose();
                process.stdout.write(colors.green('\x20PUBLISH SUCCESSFULLY!\n'));
                deferred.resolve(true);
                return deferred.promise
            }
    
            // ��ʮ��������ͳһ����
            var ERROR_CATCH = function (error) {
                process.stdout.write(colors.red('Wrong Message: \n'))
                process.stdout.write(colors.red(error.message + '\n'))
            }
            // ɾ������zip�ļ�
            function delDir(path){
                let files = []
                if(fs.existsSync(path)){
                    files = fs.readdirSync(path)
                    files.forEach((file, index) => {
                        let curPath = path + "/" + file
                        if(fs.statSync(curPath).isDirectory()){
                            delDir(curPath)
                        } else {
                            fs.unlinkSync(curPath)
                        }
                    });
                    fs.rmdirSync(path);
                }
            }
            Q.fcall(BUILD)
                .then(COPY)
                .then(COPYTOZIP)
                .then(ZIPFILE)
                .then(UPLOAD)
                .then(CONNECT)
                .then(UNZIPFILE)
                .then(COPYTOSERVER)
                .then(DELZIPSERVERFILE)
                .then(SUCCESS)
                .catch(ERROR_CATCH)
                .done()
    }()
    
    
    
    