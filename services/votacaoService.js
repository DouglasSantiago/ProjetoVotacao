var legislapp = angular.module('Legislapp', []);

legislapp.service("votacaoService", ['$http', function($http) {
    return {
        getVotacao: function(idProjeto) {
            return $http.get('https://legis.senado.leg.br/dadosabertos/materia/votacoes/141819', {
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
}]);