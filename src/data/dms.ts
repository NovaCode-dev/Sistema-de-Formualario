import { SystemModule } from './types';

export const DMS_DATA: SystemModule[] = [
  {
    "module": "DMS",
    "controllers": [
      {
        "name": "ExternalAPIController",
        "endpoints": [
          "POST /api/external"
        ]
      },
      {
        "name": "HealthCheckController",
        "endpoints": [
          "GET /healthcheck/status"
        ]
      },
      {
        "name": "ParamsController",
        "endpoints": [
          "GET /params/version"
        ]
      },
      {
        "name": "PublicAPI",
        "endpoints": [
          "GET /public/linkValidation/{ruc}/{id}"
        ]
      },
      {
        "name": "SceController",
        "endpoints": [
          "DELETE /sce/sgdcontenido/archive/{idContenido}",
          "DELETE /sce/sgdcontenido/delete/{idContenido}",
          "DELETE /sce/sgdcontenido/deleteByRuleLifeCycle",
          "DELETE /sce/sgdcontenido/deleteContenidos",
          "GET /sce/sgdatributo/findAllActivesByCodModulo/{codModulo}",
          "GET /sce/sgdatributo/findByIdAtributo/{idAtributo}",
          "GET /sce/sgdcontenido/downloadFile/{idContenido}",
          "GET /sce/sgdcontenido/findAllSharedByCodModulo/{codModulo}",
          "GET /sce/sgdcontenido/testIfContenidoExists/{idContenido}",
          "GET /sce/sgdempresa/findPredeterminado",
          "GET /sce/sgdempresa/findSgdEmpresaByNroDocumento/{nroDocumento}",
          "GET /sce/sgdmoduloatributo/findByCodigoSgdModuloAtributo/{codigo}",
          "GET /sce/sgdtipoarchivo/findAllActives",
          "GET /sce/sgdtipodocumento/findAllActivesByCodModulo/{codModulo}",
          "GET /sce/sgdtipodocumento/findAllActivesByIdModulo/{idModulo}",
          "POST /sce/sgdatributo/findAllByCodigoList",
          "POST /sce/sgdatributo/findAllByIdList",
          "POST /sce/sgdcontenido/downloadFileCustom",
          "POST /sce/sgdcontenido/downloadFiles",
          "POST /sce/sgdcontenido/downloadFilesBySearch",
          "POST /sce/sgdcontenido/findAllByCodigoModuloAndUbicacion/{codigoModulo}",
          "POST /sce/sgdcontenido/findAllBySearch",
          "POST /sce/sgdcontenido/findAllSharedByCodModuloListAndAtributoList",
          "POST /sce/sgdcontenido/getPresignedUrlsByIdList",
          "POST /sce/sgdcontenido/uploadFile",
          "POST /sce/sgdcontenido/uploadFileCustom",
          "POST /sce/sgdcontenido/uploadFileMultipart",
          "POST /sce/sgdcontenido/uploadMultipleContenido",
          "POST /sce/sgdcontenido/uploadMultipleContenidoCustom",
          "POST /sce/sgdusuario/add",
          "PUT /sce/sgdcontenido/updateCtrlPublicoBySgdContenidoList",
          "PUT /sce/sgdcontenidoatributo"
        ]
      },
      {
        "name": "SecurityController",
        "endpoints": [
          "POST /auth/login",
          "POST /auth/loginInvitado"
        ]
      },
      {
        "name": "SgdAtributoController",
        "endpoints": [
          "GET /sgdatributo/findAllActives",
          "GET /sgdatributo/findAllActivesByCodModulo/{codModulo}",
          "GET /sgdatributo/findAllActivesByCtrlRutaAndEstado",
          "GET /sgdatributo/findAllActivesByIdModulo/{idModulo}"
        ]
      },
      {
        "name": "SgdComparadorController",
        "endpoints": [
          "GET /sgdcomparador/findAllActivesByIdTipoAtributo/{idTipoAtributo}"
        ]
      },
      {
        "name": "SgdConexionController",
        "endpoints": [
          "DELETE /sgdconexion/{id}",
          "GET /sgdconexion",
          "POST /sgdconexion",
          "POST /sgdconexion/test",
          "PUT /sgdconexion"
        ]
      },
      {
        "name": "SgdContenidoAtributoController",
        "endpoints": [
          "DELETE /sgdcontenidoatributo/{idContenidoAtributo}/{idUsuario}",
          "POST /sgdcontenidoatributo",
          "POST /sgdcontenidoatributo/insertList"
        ]
      },
      {
        "name": "SgdContenidoController",
        "endpoints": [
          "DELETE /sgdcontenido/archive/{idContenido}/{idUsuario}",
          "DELETE /sgdcontenido/archiveDir/{idContenido}/{idUsuario}",
          "DELETE /sgdcontenido/delete/{idContenido}/{idUsuario}",
          "DELETE /sgdcontenido/deleteDir/{idContenido}/{idUsuario}",
          "GET /sgdcontenido/downloadFile/{idContenido}/{idUsuario}",
          "GET /sgdcontenido/findAllAllowedByIdContenidoPadreAndIdUsuario/{idContenidoPadre}/{idUsuario}",
          "GET /sgdcontenido/findAllAllowedByIdModuloAndIdUsuario/{idModulo}/{idUsuario}",
          "GET /sgdcontenido/findAllArchivedByModulo/{idModulo}",
          "GET /sgdcontenido/findAllSharedByModulo/{idModulo}/{idUsuario}",
          "GET /sgdcontenido/{idContenido}",
          "POST /sgdcontenido",
          "POST /sgdcontenido/addFolder",
          "POST /sgdcontenido/copyFileOrDir/{idUsuario}",
          "POST /sgdcontenido/findAllByFiltro",
          "POST /sgdcontenido/findAllContenidoExportExcel",
          "POST /sgdcontenido/findAllFilesDownload",
          "POST /sgdcontenido/moveFileOrDir/{idUsuario}",
          "POST /sgdcontenido/multipleFilesDownload",
          "POST /sgdcontenido/searchFilter",
          "POST /sgdcontenido/uploadFile",
          "POST /sgdcontenido/uploadFileMultipart",
          "PUT /sgdcontenido",
          "PUT /sgdcontenido/rename",
          "PUT /sgdcontenido/restore/{idContenido}/{idUsuario}",
          "PUT /sgdcontenido/restoreDir/{idContenido}/{idUsuario}",
          "PUT /sgdcontenido/restoreWithRename",
          "PUT /sgdcontenido/restoreWithReplace/{idContenido}/{idUsuario}",
          "PUT /sgdcontenido/updCtrlProtegido/{idUsuario}",
          "PUT /sgdcontenido/updCtrlPublico/{idUsuario}"
        ]
      },
      {
        "name": "SgdEmpresaController",
        "endpoints": [
          "GET /sgdempresa/findPredeterminado",
          "POST /sgdempresa",
          "PUT /sgdempresa"
        ]
      },
      {
        "name": "SgdLinkDescargaContenidoController",
        "endpoints": [
          "GET /sgdlinkdescargacontenido/findAllByIdContenidoPadre/{id}",
          "GET /sgdlinkdescargacontenido/findAllByIdLinkDescarga/{id}"
        ]
      },
      {
        "name": "SgdLinkDescargaController",
        "endpoints": [
          "GET /sgdlinkdescarga/linkValidation/{ruc}/{id}",
          "GET /sgdlinkdescarga/{id}",
          "POST /sgdlinkdescarga",
          "POST /sgdlinkdescarga/generateLink"
        ]
      },
      {
        "name": "SgdModuloController",
        "endpoints": [
          "GET /sgdmodulo/backupStatus/{jobId}",
          "GET /sgdmodulo/createBackup",
          "GET /sgdmodulo/findAllActives",
          "GET /sgdmodulo/findAllAllowedByIdProyectoAndIdUsuario/{idProyecto}/{idUsuario}",
          "GET /sgdmodulo/findAllByIdProyecto/{idProyecto}",
          "GET /sgdmodulo/findByCodigo/{codigo}",
          "GET /sgdmodulo/findByCodigoCustom/{codigo}",
          "POST /sgdmodulo",
          "PUT /sgdmodulo"
        ]
      },
      {
        "name": "SgdProyectoController",
        "endpoints": [
          "GET /sgdproyecto/findAll",
          "GET /sgdproyecto/findAllAllowedByUsuario/{idUsuario}",
          "POST /sgdproyecto",
          "PUT /sgdproyecto"
        ]
      },
      {
        "name": "SgdTipoArchivoController",
        "endpoints": [
          "GET /sgdtipoarchivo/findAllActives"
        ]
      },
      {
        "name": "SgdTipoDocumentoController",
        "endpoints": [
          "DELETE /sgdtipodocumento/{id}",
          "GET /sgdtipodocumento/findAllActives",
          "GET /sgdtipodocumento/findAllActivesByCodModulo/{codModulo}",
          "GET /sgdtipodocumento/findAllActivesByIdModulo/{idModulo}",
          "GET /sgdtipodocumento/findAllByIdModulo/{idModulo}",
          "GET /sgdtipodocumento/{idTipoDocumento}",
          "POST /sgdtipodocumento",
          "PUT /sgdtipodocumento"
        ]
      },
      {
        "name": "SgdTipoDocumentoIdentidadController",
        "endpoints": [
          "GET /sgdtipodocumentoidentidad/findAllActives"
        ]
      },
      {
        "name": "SgdUsuarioController",
        "endpoints": [
          "DELETE /sgdusuario/{id}",
          "GET /sgdusuario",
          "GET /sgdusuario/findAccesosByIdUsuario/{idUsuario}",
          "GET /sgdusuario/findAllActives",
          "GET /sgdusuario/{id}",
          "POST /sgdusuario/add",
          "POST /sgdusuario/copyAccesosToIdUsuario/{idUsuario}"
        ]
      }
    ]
  }
];
