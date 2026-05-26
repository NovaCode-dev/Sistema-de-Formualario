import { SystemModule } from './types';

export const CONTROL_CLI_DATA: SystemModule[] = [
  {
    "module": "Control Clientes",
    "controllers": [
      {
        "name": "health-check-controller",
        "endpoints": [
          "GET /healthcheck/status"
        ]
      },
      {
        "name": "params-controller",
        "endpoints": [
          "GET /params/environment",
          "GET /params/version"
        ]
      },
      {
        "name": "public-controller",
        "endpoints": [
          "GET /api/public/licenciaApiKeyRentalValidation/{nroDocumento}/{apiKey}/{apiCode}",
          "GET /api/public/systemRentalValidation/{nroDocumento}",
          "GET /api/public/systemRentalValidation/{nroDocumento}/{codigoSistema}",
          "POST /api/public/systemsRentalValidationByNroDocumentoAndCodSistemaList"
        ]
      },
      {
        "name": "sgc-api-controller",
        "endpoints": [
          "DELETE /api/sgcapis",
          "GET /api/sgcapis/{id}",
          "POST /api/sgcapis",
          "PUT /api/sgcapis"
        ]
      },
      {
        "name": "sgc-api-key-api-controller",
        "endpoints": [
          "DELETE /api/sgcapikeyapis",
          "GET /api/sgcapikeyapis/{sgcApiKey}/{sgcApi}",
          "POST /api/sgcapikeyapis",
          "PUT /api/sgcapikeyapis"
        ]
      },
      {
        "name": "sgc-api-key-controller",
        "endpoints": [
          "DELETE /api/sgcapikeyes",
          "GET /api/sgcapikeyes/{id}",
          "POST /api/sgcapikeyes",
          "PUT /api/sgcapikeyes"
        ]
      },
      {
        "name": "sgc-cliente-aduana-controller",
        "endpoints": [
          "DELETE /api/sgcclienteaduanas",
          "GET /api/sgcclienteaduanas/{sgcCliente}/{idAduana}",
          "POST /api/sgcclienteaduanas",
          "PUT /api/sgcclienteaduanas"
        ]
      },
      {
        "name": "sgc-cliente-contacto-controller",
        "endpoints": [
          "DELETE /api/sgcclientecontactos",
          "GET /api/sgcclientecontactos/findAllByIdCliente/{idCliente}",
          "GET /api/sgcclientecontactos/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/sgcclientecontactos/{id}",
          "POST /api/sgcclientecontactos",
          "PUT /api/sgcclientecontactos"
        ]
      },
      {
        "name": "sgc-cliente-controller",
        "endpoints": [
          "DELETE /api/sgcclientes",
          "GET /api/sgcclientes/findAll",
          "GET /api/sgcclientes/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/sgcclientes/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgcclientes/findAllCustom",
          "GET /api/sgcclientes/findAllTbTipoOperadorByIdCliente/{idCliente}",
          "GET /api/sgcclientes/findAllTbTipoOperadorByNroDocumento/{nroDocumento}",
          "GET /api/sgcclientes/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/sgcclientes/findByNroDocumento/{nroDocumento}",
          "GET /api/sgcclientes/{id}",
          "POST /api/sgcclientes",
          "POST /api/sgcclientes/insert",
          "POST /api/sgcclientes/update",
          "PUT /api/sgcclientes"
        ]
      },
      {
        "name": "sgc-cliente-grupo-sistema-controller",
        "endpoints": [
          "DELETE /api/sgcclientegruposistemas",
          "GET /api/sgcclientegruposistemas/findAllByIdCliente/{idCliente}",
          "GET /api/sgcclientegruposistemas/findAllByNroDocumento/{nroDoc}",
          "GET /api/sgcclientegruposistemas/{sgcCliente}/{sgcGrupoSistema}",
          "POST /api/sgcclientegruposistemas",
          "PUT /api/sgcclientegruposistemas",
          "PUT /api/sgcclientegruposistemas/{idCliente}/{idGrupoSistema}/cantidad/{cantidad}"
        ]
      },
      {
        "name": "sgc-cliente-tipo-operador-controller",
        "endpoints": [
          "DELETE /api/sgcclientetipooperadores",
          "GET /api/sgcclientetipooperadores/{sgcCliente}/{idTipoOperador}",
          "POST /api/sgcclientetipooperadores",
          "PUT /api/sgcclientetipooperadores"
        ]
      },
      {
        "name": "sgc-contrato-controller",
        "endpoints": [
          "DELETE /api/sgccontratos",
          "GET /api/sgccontratos/findAllByIdCliente/{idCliente}",
          "GET /api/sgccontratos/{id}",
          "POST /api/sgccontratos",
          "POST /api/sgccontratos/insert",
          "POST /api/sgccontratos/update",
          "PUT /api/sgccontratos"
        ]
      },
      {
        "name": "sgc-estado-servicio-controller",
        "endpoints": [
          "DELETE /api/sgcestadoservicios",
          "GET /api/sgcestadoservicios/findAll",
          "GET /api/sgcestadoservicios/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgcestadoservicios/{id}",
          "POST /api/sgcestadoservicios",
          "PUT /api/sgcestadoservicios"
        ]
      },
      {
        "name": "sgc-grupo-empresarial-controller",
        "endpoints": [
          "DELETE /api/sgcgrupoempresariales",
          "GET /api/sgcgrupoempresariales/findAll",
          "GET /api/sgcgrupoempresariales/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgcgrupoempresariales/{id}",
          "POST /api/sgcgrupoempresariales",
          "PUT /api/sgcgrupoempresariales"
        ]
      },
      {
        "name": "sgc-grupo-sistema-controller",
        "endpoints": [
          "DELETE /api/sgcgruposistemas",
          "GET /api/sgcgruposistemas/findAllByEstado/{estado}",
          "GET /api/sgcgruposistemas/findSistemasHabilitadosByIdGrupoSistema/{idGrupoSistema}",
          "GET /api/sgcgruposistemas/{id}",
          "POST /api/sgcgruposistemas",
          "PUT /api/sgcgruposistemas"
        ]
      },
      {
        "name": "sgc-licencia-api-controller",
        "endpoints": [
          "DELETE /api/sgclicenciaapis",
          "GET /api/sgclicenciaapis/{sgcCliente}/{sgcApi}",
          "POST /api/sgclicenciaapis",
          "PUT /api/sgclicenciaapis"
        ]
      },
      {
        "name": "sgc-licencia-cliente-controller",
        "endpoints": [
          "DELETE /api/sgclicenciaclientes",
          "GET /api/sgclicenciaclientes/findAllByIdCliente/{idCliente}",
          "GET /api/sgclicenciaclientes/findAllByIdClienteCustom/{idCliente}",
          "GET /api/sgclicenciaclientes/findAllByNroDocumentoAndEstadoSistema/{nroDocumento}/{estado}",
          "GET /api/sgclicenciaclientes/findAllSgcSistemaByIdClienteAndEstadoNgSelect/{idCliente}/{estado}/{isGroupedSearch}",
          "GET /api/sgclicenciaclientes/findAllSgcSistemaByIdGrupoSistemaAndEstadoNgSelect/{idCliente}/{idGrupoSistema}/{estado}/{isGroupedSearch}",
          "GET /api/sgclicenciaclientes/findAllTbTipoOperadorByIdLicenciaCliente/{sgcCliente}/{sgcSistema}",
          "GET /api/sgclicenciaclientes/findByNroRucAndCodigoSistema/{nroRuc}/{codigoSistema}",
          "GET /api/sgclicenciaclientes/systemsRentalValidationByNroDocumentoForSistemasOperativos/{nroDocumento}",
          "GET /api/sgclicenciaclientes/{sgcCliente}/{sgcSistema}",
          "POST /api/sgclicenciaclientes",
          "POST /api/sgclicenciaclientes/systemsRentalValidationByNroDocumentoAndCodSistemaList",
          "POST /api/sgclicenciaclientes/updateAllCustom",
          "PUT /api/sgclicenciaclientes"
        ]
      },
      {
        "name": "sgc-licencia-cliente-tipo-operador-controller",
        "endpoints": [
          "DELETE /api/sgclicenciaclientetipooperadores",
          "GET /api/sgclicenciaclientetipooperadores/{sgcCliente}/{sgcSistema}/{idTipoOperador}",
          "POST /api/sgclicenciaclientetipooperadores",
          "PUT /api/sgclicenciaclientetipooperadores"
        ]
      },
      {
        "name": "sgc-licencia-oficina-controller",
        "endpoints": [
          "DELETE /api/sgclicenciaoficinas",
          "GET /api/sgclicenciaoficinas/findAllByIdOficina/{idOficina}",
          "GET /api/sgclicenciaoficinas/findAllSgcSistemaByIdOficinaAndEstadoNgSelect/{idOficina}/{estado}",
          "GET /api/sgclicenciaoficinas/{sgcOficina}/{sgcSistema}",
          "POST /api/sgclicenciaoficinas",
          "PUT /api/sgclicenciaoficinas"
        ]
      },
      {
        "name": "sgc-oficina-aduana-controller",
        "endpoints": [
          "DELETE /api/sgcoficinaaduanas",
          "GET /api/sgcoficinaaduanas/{sgcOficina}/{idAduana}",
          "POST /api/sgcoficinaaduanas",
          "PUT /api/sgcoficinaaduanas"
        ]
      },
      {
        "name": "sgc-oficina-controller",
        "endpoints": [
          "DELETE /api/sgcoficinas",
          "GET /api/sgcoficinas/findAllByIdCliente/{idCliente}",
          "GET /api/sgcoficinas/{id}",
          "POST /api/sgcoficinas",
          "PUT /api/sgcoficinas"
        ]
      },
      {
        "name": "sgc-sistema-controller",
        "endpoints": [
          "DELETE /api/sgcsistemas",
          "GET /api/sgcsistemas/existByNroDocumentoAndCodigoSistema/{nroDocumento}/{codSistema}",
          "GET /api/sgcsistemas/findAll",
          "GET /api/sgcsistemas/findAllBasicActive",
          "GET /api/sgcsistemas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgcsistemas/findAllByNroDocumentoAndEstado/{nroDocumento}/{estado}",
          "GET /api/sgcsistemas/findAllCustom",
          "GET /api/sgcsistemas/findAllSciSistemaByNroDocumentoAndEstado/{nroDocumento}/{estado}",
          "GET /api/sgcsistemas/findAllTbTipoOperadorByIdSistema/{idSistema}",
          "GET /api/sgcsistemas/findIdByCodigo/{codigo}",
          "GET /api/sgcsistemas/findSistemaAndIdTipoOperadoresByNroDocumentoAndCodigoSistema/{nroDocumento}/{codigoSistema}",
          "GET /api/sgcsistemas/tbtipooperadores/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgcsistemas/{id}",
          "POST /api/sgcsistemas",
          "POST /api/sgcsistemas/findAllByIdList",
          "POST /api/sgcsistemas/insertCustom",
          "POST /api/sgcsistemas/updateCustom",
          "PUT /api/sgcsistemas"
        ]
      },
      {
        "name": "sgc-sistema-tipo-operador-controller",
        "endpoints": [
          "DELETE /api/sgcsistematipooperadores",
          "GET /api/sgcsistematipooperadores/{sgcSistema}/{idTipoOperador}",
          "POST /api/sgcsistematipooperadores",
          "PUT /api/sgcsistematipooperadores"
        ]
      },
      {
        "name": "sgc-tipo-control-licencia-controller",
        "endpoints": [
          "DELETE /api/sgctipocontrollicencias",
          "GET /api/sgctipocontrollicencias/findAll",
          "GET /api/sgctipocontrollicencias/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgctipocontrollicencias/{id}",
          "POST /api/sgctipocontrollicencias",
          "POST /api/sgctipocontrollicencias/findAllByIdList",
          "PUT /api/sgctipocontrollicencias"
        ]
      }
    ]
  }
];
