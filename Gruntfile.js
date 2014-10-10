module.exports = function(grunt) {

	
	grunt.initConfig({	//definição das tarefas de acordo com documentação
		
		pkg: grunt.file.readJSON('package.json'),

		
		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'dist/index.html': 'index.html',     // 'destination': 'source'
		        
		      }
		    }
		},
		


		
		jshint: {
		  // define the files to lint
		  files: ['gruntfile.js', 'dev/**/*.js', 'test/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)

		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},
		



	//minifica e concatena arquivos js
		uglify : {
				//de acordo com a doc. 	O “my_target” são as configurações dos arquivos que serão minificados. Não precisa ser “my_target”. Ali você pode colocar o nome que preferir.
			  	options: {
			  		
			  		mangle : false,  //para evitar alterações nas suas variáveis ​​e nomes de função
			    	// the banner is inserted at the top of the output - //Faixa de texto antes do conteúdo minificado
			    	banner: '/*! <%= pkg.name %> - <%= pkg.homepage  %> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
			  	},

			  	//Dentro de my_target, em “files”, você passa os arquivos para minificar. 
			  	//Primeiro você passa o destino (assets/js/main.js) e depois os arquivos de origem, na ordem em que devem ser minificados, no formato array.	
			  	myTargets:{
			  	   	files: {
			    		//destino : origem
			    		'dist//<%= pkg.name %>.min.js' : ['dev/_js/*.js']
			    		//'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			      	}
			  	}
		    
		   /*outra sintaxe
		    build: {
	      		src: 'origem/*.js',
	      		dest: 'destino/<%= pkg.name %>.min.js'
	    	}*/
		}// uglify




		/*vários outros
		imagemin //otimização de imagens
		browsersinc? //sincronizar browser para diversos dispositivos...
		pagespeed
		rsync //pega o arquivo de um lugar e manda pra outro (enviar para o servidor)
		*/


		/*
		coffee:{
			options:
				bare:
				join:
			compile:
				files:
		},
		*/


		/*
		//spritesmith
			sprite:{
				all:{
					src: 'dev/img/sprites/'.png',
					destimg: 'dev/img/ico-general.png1,
					destiCSS: 'dev/sass/sprites.scss',
					cssFormat: 'css'
				}
			}

		*/

		

		/*	
		cssmin:{
			minify:{	//de acordo com a doc. 	
				files:{
					"out/css/main.css": "scr/css/master.css"
				}
			}
		},
		*/

		
		/*
		concat: {
		  options: {
		    // define a string to put between each file in the concatenated output
		    separator: ';'
		  },
		  dist: {
		    // the files to concatenate
		 //   src: ['src/asterisco asterisco/ asterisco.js'],  //trocar a palavra asterisco por *
		    // the location of the resulting JS file
		    dest: 'dist/<%= pkg.name %>.js'
		  }
		},
		*/


		/*
		qunit: {
		  files: ['test/asteriscoAkiasteriscoAki/asteriscoAki.html']
		},
		*/


		/*
		watch: {		//fica olhando o diretório, e se algum arquivo mudar, ele roda a configuração, por exemplo toda vez q o arquivo mudar, gera a versão de produção... ou toda vez q uma nova imagem for colocada na pasta, ela será otimizada
		  files: ['<%= jshint.files %>'],
		  tasks: ['jshint', 'qunit']
		},
		*/


		/*
		sass : {
	      dist : {
	        options : { style : 'compressed' },
	        files : {
	          'assets/css/style.css' : 'assets/_sass/style.sass'
	        }
	      }
	    } // sass
		*/





		
	});

	
	//Logo após o grunt.initConfig(), você vai carregar as os plugins do Grunt e criar as tarefas que serão executadas no terminal. O loadNpmTasks carrega o plugin e o registerTask criar a tarefa.

	//ler Plugins do Grunt
	
	// minificar arquivo - alguns plugins não começam com grunt-contrib, devemos ver documentação
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');	//realizando leitura do plugin para minificar o html.
	//grunt.loadNpmTasks('grunt-contrib-cssmin');		
	//grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-sass');
	

	// Tarefas que serão executadas - No registerTask, o primeiro parâmetro é o nome da tarefa e o segundo parâmetro é um array com as tarefas que serão executadas ao rodar esse comando.

	// this would be run by typing "grunt test" on the command line
	//grunt.registerTask('test', ['jshint', 'qunit']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['uglify', 'htmlmin', 'jshint']);


};