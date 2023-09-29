sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("brasileirao.controller.Main", {
            onInit: function () {
                
                let dadosGerais = {
                    nomeCampeonato : "Brasileirao 2023 no Canal FioriNET.",
                    rodada : 99
                }

                let dadosModel =  new JSONModel();
                dadosModel.setData(dadosGerais)
                let tela = this.getView()
                tela.setModel(dadosModel, "ModeloDadosGerais")

                }
        })
    })
