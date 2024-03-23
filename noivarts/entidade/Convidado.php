<?php
namespace noivarts\entidade\Convidado;
    class Convidado {
        private ?string $id;

        public function __construct(
            ?string $id = '',
            private $nome = '',
            private $idade = 0
        )
        {
            $this->id = $id;
            $this->nome = $nome;
            $this->idade = $idade;
        }
        public function id():string{
            return $this->id;
        }
        public function nome():string{
            return $this->nome;
        }
        public function idade():int{
            return $this->idade;
        }
    }
