<?php
namespace noivarts\entidade;
use noivarts\entidade\Convidado;

Class Principal{
    public function criarConvidado(){
        $teste = new Convidado('1', 'Caue', 20);
        $teste->id();
        $teste->nome();
        $teste->idade();
    }
}