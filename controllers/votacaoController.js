legislapp.controller('VotacaoController', ['$scope', 'votacaoService', function($scope, votacaoService) {
    $scope.iniciar = function() {
        $scope.votacao = [];
        votacaoService.getVotacao(0).then(function(response) {
                $scope.votacao = response.data.VotacaoMateria.Materia.Votacoes.Votacao[0].Votos;
                $scope.sessaoPlenaria = response.data.VotacaoMateria.Materia.Votacoes.Votacao[0].SessaoPlenaria;
                $scope.materia = response.data.VotacaoMateria.Materia.IdentificacaoMateria;
            },
            function(error) {
                console.log(error);
                alert('Ocorreu um erro ao carregar os dados');
            });
    }

    $scope.iniciar();
}]);