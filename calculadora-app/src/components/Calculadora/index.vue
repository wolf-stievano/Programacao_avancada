<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div v-on:click="log10" class="botao tarefa">log</div>
    <div v-on:click="limpar" class="botao">C</div>
    <div v-on:click="sinal" class="botao">+/-</div>
    <div v-on:click="porcentagem" class="botao">%</div>
    <div v-on:click="dividir" class="botao operadores">÷</div> 
    <div v-on:click="logxy" class="botao tarefa">logxy</div>
    <div v-on:click="juntarNumeros('7')" class="botao">7</div>
    <div v-on:click="juntarNumeros('8')" class="botao">8</div>
    <div v-on:click="juntarNumeros('9')" class="botao">9</div>
    <div v-on:click="multiplicar" class="botao operadores">x</div>
    <div v-on:click="raizq" class="botao tarefa">²√</div>  
    <div v-on:click="juntarNumeros('4')" class="botao">4</div>
    <div v-on:click="juntarNumeros('5')" class="botao">5</div>
    <div v-on:click="juntarNumeros('6')" class="botao">6</div>
    <div v-on:click="diminuir" class="botao operadores">-</div> 
    <div v-on:click="raizxy" class="botao tarefa">raizxy</div>
    <div v-on:click="juntarNumeros('1')" class="botao">1</div>
    <div v-on:click="juntarNumeros('2')" class="botao">2</div>
    <div v-on:click="juntarNumeros('3')" class="botao">3</div>
    <div v-on:click="somar" class="botao operadores">+</div>
    <div v-on:click="Quadrado" class="botao tarefa"> x²</div>
    <div v-on:click="juntarNumeros('0')" class="botao zero">0</div>
    <div v-on:click="ponto" class="botao">.</div>
    <div v-on:click="resultado" class="botao operadores"> = </div>  
    <div v-on:click="calcularPotencia" class="botao tarefa">Pot</div>
  </div>
</template>

<script src="./calculadora.js"></script>

<style src="./calculadora.css" scoped />