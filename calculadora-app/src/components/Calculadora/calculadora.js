export default {
    data() {
      return {
        valorCorrente: '',
        numeroAnterior: null,
        operador: null,
        operadorClicado: false,
      };
    },
    methods: {
      limpar() {
        this.valorCorrente = '';
      },
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-'
          ? this.valorCorrente.slice(1)
          : `-${this.valorCorrente}`;
      },
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
  
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
      ponto() {
          if (this.valorCorrente.indexOf('.') === -1) {
            this.juntarNumeros('.');
          }
        },
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
      dividir() {
        this.operador = (num1, num2) => num1 / num2;
        this.setarValor();
      },
      multiplicar() {
        this.operador = (num1, num2) => num1 * num2;
        this.setarValor();
      },
      diminuir() {
        this.operador = (num1, num2) => num1 - num2;
        this.setarValor();
      },
      somar() {
        this.operador = (num1, num2) => num1 + num2;
        this.setarValor();
      },
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
      setarValor() {
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
      log10() {
        this.operador = (num1) => {
            if (num1 <= 0 || isNaN(num1)) {
              return `Error`;
            }
            return Math.log10(num1);
          };
          this.setarValor();
      },
      logxy() {
        this.operador = (num1, num2) => {
            if (num1 <= 0 || num2 <= 0) {
              return `Error`;
            }
            return Math.log10(num1) / Math.log10(num2);
          };
          this.setarValor();
      },
      raizq() {
        this.operador = (num) => {
          if (num < 0 || isNaN(num)) {
            return `Error`;
          }
          return Math.sqrt(num);
        };
        this.setarValor();
      },
      raizxy() {
        this.operador = (operador1, operador2) => {
          if (operador1 < 0 || isNaN(operador1) || operador2 <= 0 || isNaN(operador2)) {
            return `Error`;
          }
          return Math.pow(operador1, 1/operador2);
        };
        this.setarValor();
      },
      Quadrado() {
        this.valorCorrente = `${Math.pow(parseFloat(this.valorCorrente), 2)}`;
      },
      calcularPotencia() {
        this.operador = (num1, num2) => Math.pow(num1, num2);
        this.setarValor();
        }
      }
    }
  