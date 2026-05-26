import { SystemModule } from './types';

export const MAESTROS_DATA: SystemModule[] = [
  {
    "module": "1. Módulo de Vehículos y Carretas",
    "controllers": [
      {
        "name": "tb-vehiculo-controller",
        "endpoints": [
          "PUT /api/tbvehiculos",
          "POST /api/tbvehiculos",
          "DELETE /api/tbvehiculos",
          "POST /api/tbvehiculos/validateImport",
          "POST /api/tbvehiculos/validateImportWithFile",
          "POST /api/tbvehiculos/model-se-ro/findAllBySearchNgSelect",
          "POST /api/tbvehiculos/model-se-ro/findAllByIdList",
          "POST /api/tbvehiculos/insertList",
          "GET /api/tbvehiculos/model-se-ro/{id}",
          "GET /api/tbvehiculos/model-se-ro/findByNroMatricula/{nroMatricula}",
          "GET /api/tbvehiculos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbvehiculos/model-se-ro/findAll",
          "GET /api/tbvehiculos/model-se-ro/findAllCustom",
          "GET /api/tbvehiculos/model-se-ro/findAllByNroDocumento/{nroDocumento}",
          "GET /api/tbvehiculos/model-se-ro/findAllByIdTransportistaCompleto/{idTransportista}",
          "GET /api/tbvehiculos/model-se-ro/findAllByIdTransportistaAndEstadoNgSelect/{idTransportista}/{estado}",
          "GET /api/tbvehiculos/model-se-ro/findAllByIdTransportista/{idTransportista}",
          "GET /api/tbvehiculos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbvehiculos/model-se-ro/existById/{id}",
          "DELETE /api/tbvehiculos/deleteAll"
        ]
      },
      {
        "name": "tb-vehiculo-imagen-controller",
        "endpoints": [
          "PUT /api/tbvehiculoimagenes",
          "POST /api/tbvehiculoimagenes",
          "DELETE /api/tbvehiculoimagenes",
          "GET /api/tbvehiculoimagenes/model-se-ro/{id}"
        ]
      },
      {
        "name": "tb-vehiculo-carreta-permiso-controller",
        "endpoints": [
          "PUT /api/tbvehiculocarretapermisos",
          "POST /api/tbvehiculocarretapermisos",
          "DELETE /api/tbvehiculocarretapermisos",
          "POST /api/tbvehiculocarretapermisos/validateImportWithFile",
          "POST /api/tbvehiculocarretapermisos/model-se-ro/findAllBySearch",
          "POST /api/tbvehiculocarretapermisos/insertList",
          "GET /api/tbvehiculocarretapermisos/model-se-ro/{id}",
          "DELETE /api/tbvehiculocarretapermisos/deleteAll"
        ]
      },
      {
        "name": "tb-tipo-permiso-vehiculo-carreta-controller",
        "endpoints": [
          "PUT /api/tbtipopermisovehiculocarretas",
          "POST /api/tbtipopermisovehiculocarretas",
          "DELETE /api/tbtipopermisovehiculocarretas",
          "GET /api/tbtipopermisovehiculocarretas/model-se-ro/{id}",
          "GET /api/tbtipopermisovehiculocarretas/model-se-ro/findAll",
          "GET /api/tbtipopermisovehiculocarretas/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbtipopermisovehiculocarretas/deleteAll"
        ]
      },
      {
        "name": "tb-modelo-vehiculo-controller",
        "endpoints": [
          "PUT /api/tbmodelovehiculos",
          "POST /api/tbmodelovehiculos",
          "DELETE /api/tbmodelovehiculos",
          "POST /api/tbmodelovehiculos/model-se-ro/findAllByIdList",
          "POST /api/tbmodelovehiculos/model-se-ro/findAllByCodigoList",
          "GET /api/tbmodelovehiculos/model-se-ro/{id}",
          "GET /api/tbmodelovehiculos/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbmodelovehiculos/model-se-ro/findAll",
          "GET /api/tbmodelovehiculos/model-se-ro/findAllByIdMarcaComercialVehiculo/{idMarcaComercialVehiculo}",
          "GET /api/tbmodelovehiculos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbmodelovehiculos/model-se-ro/findAllByCodigoMarcaComercialVehiculoAndEstado/{codigoMarcaComercialVehiculo}/{estado}",
          "DELETE /api/tbmodelovehiculos/deleteAll"
        ]
      },
      {
        "name": "tb-marca-comercial-vehiculo-controller",
        "endpoints": [
          "PUT /api/tbmarcacomercialvehiculos",
          "POST /api/tbmarcacomercialvehiculos",
          "DELETE /api/tbmarcacomercialvehiculos",
          "POST /api/tbmarcacomercialvehiculos/model-se-ro/findAllByIdList",
          "POST /api/tbmarcacomercialvehiculos/model-se-ro/findAllByCodigoList",
          "GET /api/tbmarcacomercialvehiculos/model-se-ro/{id}",
          "GET /api/tbmarcacomercialvehiculos/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbmarcacomercialvehiculos/model-se-ro/findAll",
          "GET /api/tbmarcacomercialvehiculos/model-se-ro/findAllBySearchAndNombreOrCodigoLikeCustom/{parametro}",
          "GET /api/tbmarcacomercialvehiculos/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbmarcacomercialvehiculos/deleteAll"
        ]
      },
      {
        "name": "tb-carreta-controller",
        "endpoints": [
          "PUT /api/tbcarretas",
          "POST /api/tbcarretas",
          "DELETE /api/tbcarretas",
          "POST /api/tbcarretas/validateImport",
          "POST /api/tbcarretas/validateImportWithFile",
          "POST /api/tbcarretas/model-se-ro/findAllByTbTransportistaCustom",
          "POST /api/tbcarretas/model-se-ro/findAllByIdList",
          "POST /api/tbcarretas/insertList",
          "GET /api/tbcarretas/model-se-ro/{id}",
          "GET /api/tbcarretas/model-se-ro/findByNroMatricula/{nroMatricula}",
          "GET /api/tbcarretas/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbcarretas/model-se-ro/findAll",
          "GET /api/tbcarretas/model-se-ro/findAllCustom",
          "GET /api/tbcarretas/model-se-ro/findAllByIdTransportistaAndEstadoNgSelect/{idTransportista}/{estado}",
          "GET /api/tbcarretas/model-se-ro/findAllByIdTransportista/{idTransportista}",
          "GET /api/tbcarretas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcarretas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbcarretas/model-se-ro/existById/{id}",
          "DELETE /api/tbcarretas/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "2. Módulo de Transportistas y Choferes",
    "controllers": [
      {
        "name": "tb-transportista-controller",
        "endpoints": [
          "PUT /api/tbtransportistas",
          "POST /api/tbtransportistas",
          "DELETE /api/tbtransportistas",
          "POST /api/tbtransportistas/validateImport",
          "POST /api/tbtransportistas/validateImportWithFile",
          "POST /api/tbtransportistas/sincronyzeTransportista",
          "POST /api/tbtransportistas/model-se-ro/findAllBySearch",
          "POST /api/tbtransportistas/model-se-ro/findAllByNroDocumentoList",
          "POST /api/tbtransportistas/model-se-ro/findAllByIdList",
          "POST /api/tbtransportistas/insertList",
          "GET /api/tbtransportistas/model-se-ro/{id}",
          "GET /api/tbtransportistas/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbtransportistas/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbtransportistas/model-se-ro/findAll",
          "GET /api/tbtransportistas/model-se-ro/findAllCustom",
          "GET /api/tbtransportistas/model-se-ro/findAllByTbViaTransporteAndTipoEntidad/{idViaTransporte}/{tipoEntidad}",
          "GET /api/tbtransportistas/model-se-ro/findAllByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbtransportistas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtransportistas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbtransportistas/model-se-ro/findAllByCodigoViaTransporteAndEstado/{codigoViaTransporte}/{estado}",
          "GET /api/tbtransportistas/model-se-ro/existById/{id}",
          "DELETE /api/tbtransportistas/deleteAll"
        ]
      },
      {
        "name": "tb-chofer-controller",
        "endpoints": [
          "PUT /api/tbchoferes",
          "POST /api/tbchoferes",
          "DELETE /api/tbchoferes",
          "POST /api/tbchoferes/validateImport",
          "POST /api/tbchoferes/validateImportWithFile",
          "POST /api/tbchoferes/updateWithNroDocumento/{nroDocumento}",
          "POST /api/tbchoferes/model-se-ro/findAllNgSelectCustom",
          "POST /api/tbchoferes/model-se-ro/findAllBySearchNgSelect",
          "POST /api/tbchoferes/model-se-ro/findAllByNroDocumentoList",
          "POST /api/tbchoferes/model-se-ro/findAllByIdList",
          "POST /api/tbchoferes/insertWithNroDocumento/{nroDocumento}",
          "POST /api/tbchoferes/insertList",
          "GET /api/tbchoferes/model-se-ro/{id}",
          "GET /api/tbchoferes/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbchoferes/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbchoferes/model-se-ro/findAll",
          "GET /api/tbchoferes/model-se-ro/findAllCustom",
          "GET /api/tbchoferes/model-se-ro/findAllByNroDocumentoTbTransportista/{nroDocumento}",
          "GET /api/tbchoferes/model-se-ro/findAllByIdTransportista/{idTransportista}",
          "GET /api/tbchoferes/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbchoferes/model-se-ro/existById/{id}",
          "DELETE /api/tbchoferes/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "3. Módulo de Clientes, Avalistas y Comisionistas",
    "controllers": [
      {
        "name": "tb-cliente-controller",
        "endpoints": [
          "PUT /api/tbclientes",
          "POST /api/tbclientes",
          "DELETE /api/tbclientes",
          "POST /api/tbclientes/validateImport",
          "POST /api/tbclientes/validateImportWithFile",
          "POST /api/tbclientes/findCustomDto",
          "POST /api/tbclientes/model-se-ro/findAllByIdList",
          "POST /api/tbclientes/model-se-ro/findAllByIdListCustom",
          "POST /api/tbclientes/model-se-ro/findAllByIdListAndRazonSocialOrNroDocumentoLike",
          "POST /api/tbclientes/insertList",
          "POST /api/tbclientes/generateCliente",
          "GET /api/tbclientes/model-se-ro/{id}",
          "GET /api/tbclientes/model-se-ro/findByNroDocumentoCustomCronogramaPago/{nroDocumento}",
          "GET /api/tbclientes/model-se-ro/findByNroDocumentoCustomConsultaRuc/{nroDocumento}",
          "GET /api/tbclientes/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbclientes/model-se-ro/findByIdCustomCronogramaPago/{id}",
          "GET /api/tbclientes/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbclientes/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbclientes/model-se-ro/findAll",
          "GET /api/tbclientes/model-se-ro/findAllWithContactos",
          "GET /api/tbclientes/model-se-ro/findAllCustom",
          "GET /api/tbclientes/model-se-ro/findAllByRazonSocialOrNroDocumentoLikeNgSelect/{nombreOrNroDocumento}",
          "GET /api/tbclientes/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbclientes/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/tbclientes/model-se-ro/findAllByEstadoBasic/{estado}",
          "GET /api/tbclientes/model-se-ro/findAllByEstadoAndTipoEntidadNgSelect/{estado}/{tipoEntidad}",
          "GET /api/tbclientes/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbclientes/model-se-ro/existByIdForEstado/{id}",
          "GET /api/tbclientes/model-se-ro/existById/{id}",
          "DELETE /api/tbclientes/deleteInBatch",
          "DELETE /api/tbclientes/deleteAll"
        ]
      },
      {
        "name": "tb-cliente-tipo-operador-controller",
        "endpoints": [
          "PUT /api/tbclientetipooperadores",
          "POST /api/tbclientetipooperadores",
          "DELETE /api/tbclientetipooperadores",
          "POST /api/tbclientetipooperadores/insertList",
          "POST /api/tbclientetipooperadores/insertAndDeleteAllCustom",
          "GET /api/tbclientetipooperadores/model-se-ro/{tbCliente}/{idTipoOperador}",
          "GET /api/tbclientetipooperadores/model-se-ro/findAllIdByIdCliente/{idCliente}",
          "GET /api/tbclientetipooperadores/model-se-ro/findAllByIdClienteNgSelect/{idCliente}",
          "GET /api/tbclientetipooperadores/model-se-ro/findAllByIdClienteAndIdTipoOperador/{idCliente}/{idTipoOperador}",
          "GET /api/tbclientetipooperadores/model-se-ro/findAllByIdCliente/{idCliente}",
          "GET /api/tbclientetipooperadores/model-se-ro/existById/{idCliente}/{idTipoOperador}",
          "DELETE /api/tbclientetipooperadores/deleteSelect",
          "DELETE /api/tbclientetipooperadores/deleteOne/{idTbClienteTipoOperador}"
        ]
      },
      {
        "name": "tb-cliente-mandato-electronico-controller",
        "endpoints": [
          "PUT /api/tbclientemandatoselectronicos",
          "POST /api/tbclientemandatoselectronicos",
          "DELETE /api/tbclientemandatoselectronicos",
          "GET /api/tbclientemandatoselectronicos/{id}",
          "GET /api/tbclientemandatoselectronicos/model-se-ro/findAllByIdCliente/{idCliente}",
          "GET /api/tbclientemandatoselectronicos/findAll"
        ]
      },
      {
        "name": "tb-cliente-garantia-160-controller",
        "endpoints": [
          "PUT /api/tbclientegarantias160",
          "POST /api/tbclientegarantias160",
          "DELETE /api/tbclientegarantias160",
          "GET /api/tbclientegarantias160/model-se-ro/{id}",
          "GET /api/tbclientegarantias160/model-se-ro/findAllByIdCliente/{idCliente}",
          "DELETE /api/tbclientegarantias160/deleteAll"
        ]
      },
      {
        "name": "tb-cliente-entidad-extranjera-controller",
        "endpoints": [
          "PUT /api/tbclienteentidadextranjeras",
          "POST /api/tbclienteentidadextranjeras",
          "DELETE /api/tbclienteentidadextranjeras",
          "POST /api/tbclienteentidadextranjeras/insertList",
          "POST /api/tbclienteentidadextranjeras/insertAndDeleteAllCustom",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/{tbCliente}/{tbEntidadExtranjera}",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/findAllIdByIdCliente/{idCliente}",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/findAllByIdClienteNgSelect/{idCliente}",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/findAllByIdClienteAndIdEntidadExtranjera/{idCliente}/{idEntidadExtranjera}",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/findAllByIdCliente/{idCliente}",
          "GET /api/tbclienteentidadextranjeras/model-se-ro/existById/{idCliente}/{idEntidadExtranjera}",
          "DELETE /api/tbclienteentidadextranjeras/deleteSelect"
        ]
      },
      {
        "name": "tb-cliente-entidad-extranjera-condicion-transaccion-controller",
        "endpoints": [
          "PUT /api/tbclienteentidadextranjeracondiciontransacciones",
          "POST /api/tbclienteentidadextranjeracondiciontransacciones",
          "DELETE /api/tbclienteentidadextranjeracondiciontransacciones",
          "POST /api/tbclienteentidadextranjeracondiciontransacciones/insertList",
          "POST /api/tbclienteentidadextranjeracondiciontransacciones/insertAndDeleteAllCustom",
          "GET /api/tbclienteentidadextranjeracondiciontransacciones/model-se-ro/{tbCliente}/{tbEntidadExtranjera}/{idCondicionTransaccion}",
          "GET /api/tbclienteentidadextranjeracondiciontransacciones/model-se-ro/findByIdCustom/{idCliente}/{idEntidadExtranjera}",
          "GET /api/tbclienteentidadextranjeracondiciontransacciones/model-se-ro/findAll",
          "DELETE /api/tbclienteentidadextranjeracondiciontransacciones/deleteSelect"
        ]
      },
      {
        "name": "tb-cliente-cronograma-pago-controller",
        "endpoints": [
          "PUT /api/tbclientecronogramapagos",
          "POST /api/tbclientecronogramapagos",
          "DELETE /api/tbclientecronogramapagos",
          "POST /api/tbclientecronogramapagos/insertAndDeleteAllCustom",
          "POST /api/tbclientecronogramapagos/deleteAll",
          "GET /api/tbclientecronogramapagos/model-se-ro/{id}",
          "GET /api/tbclientecronogramapagos/model-se-ro/findByIdClienteAndIdTipoComprobanteAndIdFormaPagoAndIdMoneda/{idCliente}/{idTipoComprobante}/{idFormaPago}/{idMoneda}",
          "DELETE /api/tbclientecronogramapagos/deleteOne/{idTbClienteCronogramaPago}"
        ]
      },
      {
        "name": "tb-cliente-cronograma-pago-detalle-controller",
        "endpoints": [
          "PUT /api/tbclientecronogramapagodetalles",
          "POST /api/tbclientecronogramapagodetalles",
          "DELETE /api/tbclientecronogramapagodetalles",
          "POST /api/tbclientecronogramapagodetalles/register",
          "GET /api/tbclientecronogramapagodetalles/model-se-ro/{id}",
          "GET /api/tbclientecronogramapagodetalles/model-se-ro/findAllByIdClienteCronogramaPago/{idClienteCronogramaPago}"
        ]
      },
      {
        "name": "tb-cliente-configuracion-pago-controller",
        "endpoints": [
          "PUT /api/tbclienteconfiguracionpagos",
          "POST /api/tbclienteconfiguracionpagos",
          "DELETE /api/tbclienteconfiguracionpagos",
          "POST /api/tbclienteconfiguracionpagos/validateImportWithFile",
          "GET /api/tbclienteconfiguracionpagos/{tbCliente}/{idTipoComprobante}",
          "GET /api/tbclienteconfiguracionpagos/model-se-ro/findByIdClienteAndIdTipoComprobante/{idCliente}/{idTipoComprobante}",
          "GET /api/tbclienteconfiguracionpagos/model-se-ro/findAllByIdCliente/{idCliente}"
        ]
      },
      {
        "name": "tb-cliente-comisionista-controller",
        "endpoints": []
      },
      {
        "name": "tb-cliente-avalista-controller",
        "endpoints": [
          "PUT /api/tbclienteavalistas",
          "POST /api/tbclienteavalistas",
          "DELETE /api/tbclienteavalistas",
          "POST /api/tbclienteavalistas/insertAndDeleteAllCustom",
          "GET /api/tbclienteavalistas/model-se-ro/{tbCliente}/{tbAvalista}",
          "GET /api/tbclienteavalistas/model-se-ro/findAllByIdCliente/{idCliente}"
        ]
      },
      {
        "name": "tb-comisionista-controller",
        "endpoints": [
          "PUT /api/tbcomisionistas",
          "POST /api/tbcomisionistas",
          "DELETE /api/tbcomisionistas",
          "POST /api/tbcomisionistas/validateImport",
          "POST /api/tbcomisionistas/insertList",
          "GET /api/tbcomisionistas/model-se-ro/{id}",
          "GET /api/tbcomisionistas/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbcomisionistas/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbcomisionistas/model-se-ro/findAll",
          "GET /api/tbcomisionistas/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbcomisionistas/deleteAll"
        ]
      },
      {
        "name": "tb-avalista-controller",
        "endpoints": [
          "PUT /api/tbavalistas",
          "POST /api/tbavalistas",
          "DELETE /api/tbavalistas",
          "POST /api/tbavalistas/validateImport",
          "POST /api/tbavalistas/insertList",
          "GET /api/tbavalistas/model-se-ro/{id}",
          "GET /api/tbavalistas/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbavalistas/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbavalistas/model-se-ro/findAll",
          "GET /api/tbavalistas/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbavalistas/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "4. Módulo de Gestión de Entidades Generales",
    "controllers": [
      {
        "name": "tb-entidad-controller",
        "endpoints": [
          "PUT /api/tbentidades",
          "POST /api/tbentidades",
          "DELETE /api/tbentidades",
          "POST /api/tbentidades/model-se-ro/findAllByNroDocumentoList",
          "POST /api/tbentidades/model-se-ro/findAllByIdList",
          "POST /api/tbentidades/model-se-ro/findAllByIdListCustomTbTipoDocumento",
          "GET /api/tbentidades/model-se-ro/{id}",
          "GET /api/tbentidades/model-se-ro/findByNroDocumento/{nroDocumento}",
          "GET /api/tbentidades/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbentidades/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbentidades/model-se-ro/findByIdConsultaRuc/{id}",
          "GET /api/tbentidades/model-se-ro/findAllOfClienteAndTransportistaCustom",
          "GET /api/tbentidades/model-se-ro/findAllOfClienteAndDepositoCustom",
          "GET /api/tbentidades/model-se-ro/findAllByEstadoNgSelectConsultaRuc/{estado}",
          "GET /api/tbentidades/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbentidades/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/tbentidades/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbentidades/model-se-ro/existById/{id}"
        ]
      },
      {
        "name": "tb-entidad-tipo-comprobante-resumen-controller",
        "endpoints": [
          "PUT /api/tbentidadtipocomprobanteresumenes",
          "POST /api/tbentidadtipocomprobanteresumenes",
          "DELETE /api/tbentidadtipocomprobanteresumenes",
          "GET /api/tbentidadtipocomprobanteresumenes/model-se-ro/{tbEntidad}/{idTipoComprobante}"
        ]
      },
      {
        "name": "tb-entidad-representante-legal-controller",
        "endpoints": [
          "PUT /api/tbentidadrepresentantelegales",
          "POST /api/tbentidadrepresentantelegales",
          "DELETE /api/tbentidadrepresentantelegales",
          "POST /api/tbentidadrepresentantelegales/validateImport",
          "POST /api/tbentidadrepresentantelegales/saveAll",
          "POST /api/tbentidadrepresentantelegales/model-se-ro/findAllByIdList",
          "POST /api/tbentidadrepresentantelegales/insertList",
          "GET /api/tbentidadrepresentantelegales/model-se-ro/{id}",
          "GET /api/tbentidadrepresentantelegales/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbentidadrepresentantelegales/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbentidadrepresentantelegales/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "GET /api/tbentidadrepresentantelegales/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbentidadrepresentantelegales/deleteAll"
        ]
      },
      {
        "name": "tb-entidad-red-agente-controller",
        "endpoints": [
          "PUT /api/tbentidadredagentes",
          "POST /api/tbentidadredagentes",
          "DELETE /api/tbentidadredagentes",
          "POST /api/tbentidadredagentes/insertList",
          "POST /api/tbentidadredagentes/insertAndDeleteAllCustom",
          "GET /api/tbentidadredagentes/model-se-ro/{tbEntidad}/{idRedAgente}",
          "GET /api/tbentidadredagentes/model-se-ro/findAllIdByIdEntidad/{idEntidad}",
          "GET /api/tbentidadredagentes/model-se-ro/findAllByIdEntidadNgSelect/{idEntidad}",
          "GET /api/tbentidadredagentes/model-se-ro/findAllByIdEntidadAndIdRedAgente/{idEntidad}/{idRedAgente}",
          "GET /api/tbentidadredagentes/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "GET /api/tbentidadredagentes/model-se-ro/existById/{idEntidad}/{idRegAgente}",
          "DELETE /api/tbentidadredagentes/deleteSelect"
        ]
      },
      {
        "name": "tb-entidad-local-controller",
        "endpoints": [
          "PUT /api/tbentidadlocales",
          "POST /api/tbentidadlocales",
          "DELETE /api/tbentidadlocales",
          "POST /api/tbentidadlocales/validateImport",
          "POST /api/tbentidadlocales/validateImportWithFile",
          "POST /api/tbentidadlocales/saveAll",
          "POST /api/tbentidadlocales/model-se-ro/findAllByIdList",
          "POST /api/tbentidadlocales/model-se-ro/findAllByIdListCustom",
          "POST /api/tbentidadlocales/model-se-ro/findAllByCodigoList",
          "POST /api/tbentidadlocales/insertList",
          "POST /api/tbentidadlocales/generateEntidadLocal",
          "GET /api/tbentidadlocales/model-se-ro/{id}",
          "GET /api/tbentidadlocales/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbentidadlocales/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbentidadlocales/model-se-ro/findAll",
          "GET /api/tbentidadlocales/model-se-ro/findAllByIdEntidadCustom/{idEntidad}",
          "GET /api/tbentidadlocales/model-se-ro/findAllByIdEntidadAndEstadoNgSelect/{idEntidad}/{estado}",
          "GET /api/tbentidadlocales/model-se-ro/findAllByIdEntidadAndEstado/{idEntidad}/{estado}",
          "GET /api/tbentidadlocales/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "GET /api/tbentidadlocales/model-se-ro/existById/{id}",
          "DELETE /api/tbentidadlocales/deleteAll"
        ]
      },
      {
        "name": "tb-entidad-extranjera-controller",
        "endpoints": [
          "PUT /api/tbentidadextranjeras",
          "POST /api/tbentidadextranjeras",
          "DELETE /api/tbentidadextranjeras",
          "POST /api/tbentidadextranjeras/validateImport",
          "POST /api/tbentidadextranjeras/validateImportWithFile",
          "POST /api/tbentidadextranjeras/updateCodigoAduana",
          "POST /api/tbentidadextranjeras/model-se-ro/findAllByIdList",
          "POST /api/tbentidadextranjeras/model-se-ro/findAllByCodigoList",
          "POST /api/tbentidadextranjeras/insertList",
          "GET /api/tbentidadextranjeras/model-se-ro/{id}",
          "GET /api/tbentidadextranjeras/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbentidadextranjeras/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbentidadextranjeras/model-se-ro/findAll",
          "GET /api/tbentidadextranjeras/model-se-ro/findAllCustom",
          "GET /api/tbentidadextranjeras/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbentidadextranjeras/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/tbentidadextranjeras/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbentidadextranjeras/model-se-ro/existById/{id}",
          "DELETE /api/tbentidadextranjeras/deleteAll"
        ]
      },
      {
        "name": "tb-entidad-extranjera-intermediario-controller",
        "endpoints": [
          "PUT /api/tbentidadextranjeraintermediarios",
          "POST /api/tbentidadextranjeraintermediarios",
          "DELETE /api/tbentidadextranjeraintermediarios",
          "POST /api/tbentidadextranjeraintermediarios/insertAndDeleteAllCustom",
          "GET /api/tbentidadextranjeraintermediarios/model-se-ro/{tbEntidadExtranjera}/{tbIntermediario}",
          "GET /api/tbentidadextranjeraintermediarios/model-se-ro/findAllByIdEntidadExtranjeraCustom/{idEntidadExtranjera}",
          "GET /api/tbentidadextranjeraintermediarios/model-se-ro/findAllByIdEntidadExtranjera/{idEntidadExtranjera}"
        ]
      },
      {
        "name": "tb-entidad-cuenta-banco-controller",
        "endpoints": [
          "PUT /api/tbentidadcuentabancos",
          "POST /api/tbentidadcuentabancos",
          "DELETE /api/tbentidadcuentabancos",
          "POST /api/tbentidadcuentabancos/model-se-ro/findAllBySearch",
          "GET /api/tbentidadcuentabancos/model-se-ro/{id}",
          "GET /api/tbentidadcuentabancos/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "DELETE /api/tbentidadcuentabancos/deleteAll"
        ]
      },
      {
        "name": "tb-entidad-contacto-controller",
        "endpoints": [
          "PUT /api/tbentidadcontactos",
          "POST /api/tbentidadcontactos",
          "DELETE /api/tbentidadcontactos",
          "POST /api/tbentidadcontactos/validateImport",
          "POST /api/tbentidadcontactos/validateImportWithFile",
          "POST /api/tbentidadcontactos/model-se-ro/findAllByIdList",
          "POST /api/tbentidadcontactos/insertList",
          "GET /api/tbentidadcontactos/model-se-ro/{id}",
          "GET /api/tbentidadcontactos/model-se-ro/findAll",
          "GET /api/tbentidadcontactos/model-se-ro/findAllByIdEntidadAndEstado/{idEntidad}/{estado}",
          "GET /api/tbentidadcontactos/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "GET /api/tbentidadcontactos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbentidadcontactos/model-se-ro/existById/{id}",
          "DELETE /api/tbentidadcontactos/deleteAll"
        ]
      },
      {
        "name": "tb-entidad-actividad-economica-controller",
        "endpoints": [
          "PUT /api/tbentidadactividadeconomicas",
          "POST /api/tbentidadactividadeconomicas",
          "DELETE /api/tbentidadactividadeconomicas",
          "POST /api/tbentidadactividadeconomicas/insertAndDeleteAllCustom",
          "GET /api/tbentidadactividadeconomicas/model-se-ro/{tbEntidad}/{idActividadEconomica}",
          "GET /api/tbentidadactividadeconomicas/model-se-ro/findAllIdByIdEntidad/{idEntidad}"
        ]
      }
    ]
  },
  {
    "module": "5. Módulo de Agentes y Terminales",
    "controllers": [
      {
        "name": "tb-intermediario-controller",
        "endpoints": [
          "PUT /api/tbintermediarios",
          "POST /api/tbintermediarios",
          "DELETE /api/tbintermediarios",
          "POST /api/tbintermediarios/validateImport",
          "POST /api/tbintermediarios/model-se-ro/findAllByIdList",
          "POST /api/tbintermediarios/insertList",
          "GET /api/tbintermediarios/model-se-ro/{id}",
          "GET /api/tbintermediarios/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbintermediarios/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbintermediarios/model-se-ro/findAll",
          "GET /api/tbintermediarios/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbintermediarios/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbintermediarios/deleteAll"
        ]
      },
      {
        "name": "tb-terminal-portuario-ubicacion-comercial-controller",
        "endpoints": [
          "PUT /api/tbterminalportuarioubicacioncomerciales",
          "POST /api/tbterminalportuarioubicacioncomerciales",
          "DELETE /api/tbterminalportuarioubicacioncomerciales",
          "POST /api/tbterminalportuarioubicacioncomerciales/insertAndDeleteAllCustom",
          "GET /api/tbterminalportuarioubicacioncomerciales/model-se-ro/{tbTerminalPortuario}/{tbUbicacionComercial}",
          "GET /api/tbterminalportuarioubicacioncomerciales/model-se-ro/findAllTbTerminalPortuarioByIdUbicacionComercialNgSelect/{idUbicacionComercial}",
          "GET /api/tbterminalportuarioubicacioncomerciales/model-se-ro/findAllTbTerminalPortuarioByIdUbicacionComercial/{idUbicacionComercial}",
          "GET /api/tbterminalportuarioubicacioncomerciales/model-se-ro/findAllIdByIdTerminalPortuario/{idTerminalPortuario}",
          "GET /api/tbterminalportuarioubicacioncomerciales/model-se-ro/existById/{idTerminalPortuario}/{idUbicacionComercial}"
        ]
      },
      {
        "name": "tb-terminal-portuario-controller",
        "endpoints": [
          "PUT /api/tbterminalportuarios",
          "POST /api/tbterminalportuarios",
          "DELETE /api/tbterminalportuarios",
          "POST /api/tbterminalportuarios/validateImport",
          "POST /api/tbterminalportuarios/model-se-ro/findAllByIdList",
          "POST /api/tbterminalportuarios/insertList",
          "GET /api/tbterminalportuarios/model-se-ro/{id}",
          "GET /api/tbterminalportuarios/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbterminalportuarios/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbterminalportuarios/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbterminalportuarios/model-se-ro/findAll",
          "GET /api/tbterminalportuarios/model-se-ro/findAllCustom",
          "GET /api/tbterminalportuarios/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbterminalportuarios/model-se-ro/findAllByCodigoTipoTerminalPortuarioAndEstado/{codigo}/{estado}",
          "GET /api/tbterminalportuarios/model-se-ro/existById/{id}",
          "DELETE /api/tbterminalportuarios/deleteAll"
        ]
      },
      {
        "name": "tb-agente-maritimo-controller",
        "endpoints": [
          "PUT /api/tbagentemaritimos",
          "POST /api/tbagentemaritimos",
          "DELETE /api/tbagentemaritimos",
          "POST /api/tbagentemaritimos/validateImport",
          "POST /api/tbagentemaritimos/model-se-ro/findAllByIdList",
          "POST /api/tbagentemaritimos/insertList",
          "GET /api/tbagentemaritimos/model-se-ro/{id}",
          "GET /api/tbagentemaritimos/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbagentemaritimos/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbagentemaritimos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbagentemaritimos/model-se-ro/findAll",
          "GET /api/tbagentemaritimos/model-se-ro/findAllCustom",
          "GET /api/tbagentemaritimos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbagentemaritimos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbagentemaritimos/model-se-ro/existById/{id}",
          "DELETE /api/tbagentemaritimos/deleteAll"
        ]
      },
      {
        "name": "tb-agente-extranjero-controller",
        "endpoints": [
          "PUT /api/tbagenteextranjeros",
          "POST /api/tbagenteextranjeros",
          "DELETE /api/tbagenteextranjeros",
          "POST /api/tbagenteextranjeros/validateImport",
          "POST /api/tbagenteextranjeros/validateImportWithFile",
          "POST /api/tbagenteextranjeros/model-se-ro/findAllByIdList",
          "POST /api/tbagenteextranjeros/insertList",
          "GET /api/tbagenteextranjeros/model-se-ro/{id}",
          "GET /api/tbagenteextranjeros/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbagenteextranjeros/model-se-ro/findByNroDocumento/{nroDocumento}",
          "GET /api/tbagenteextranjeros/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbagenteextranjeros/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbagenteextranjeros/model-se-ro/findAll",
          "GET /api/tbagenteextranjeros/model-se-ro/findAllCustom",
          "GET /api/tbagenteextranjeros/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbagenteextranjeros/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbagenteextranjeros/model-se-ro/existById/{id}",
          "DELETE /api/tbagenteextranjeros/deleteAll"
        ]
      },
      {
        "name": "tb-agente-carga-controller",
        "endpoints": [
          "PUT /api/tbagentecargas",
          "POST /api/tbagentecargas",
          "DELETE /api/tbagentecargas",
          "POST /api/tbagentecargas/validateImport",
          "POST /api/tbagentecargas/model-se-ro/findAllByIdList",
          "POST /api/tbagentecargas/insertList",
          "GET /api/tbagentecargas/model-se-ro/{id}",
          "GET /api/tbagentecargas/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbagentecargas/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbagentecargas/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbagentecargas/model-se-ro/findAll",
          "GET /api/tbagentecargas/model-se-ro/findAllCustom",
          "GET /api/tbagentecargas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbagentecargas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbagentecargas/model-se-ro/existById/{id}",
          "DELETE /api/tbagentecargas/deleteAll"
        ]
      },
      {
        "name": "tb-agente-aereo-controller",
        "endpoints": [
          "PUT /api/tbagenteaereos",
          "POST /api/tbagenteaereos",
          "DELETE /api/tbagenteaereos",
          "POST /api/tbagenteaereos/validateImport",
          "POST /api/tbagenteaereos/model-se-ro/findAllByIdList",
          "POST /api/tbagenteaereos/insertList",
          "GET /api/tbagenteaereos/model-se-ro/{id}",
          "GET /api/tbagenteaereos/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbagenteaereos/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbagenteaereos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbagenteaereos/model-se-ro/findAll",
          "GET /api/tbagenteaereos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbagenteaereos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbagenteaereos/model-se-ro/existById/{id}",
          "DELETE /api/tbagenteaereos/deleteAll"
        ]
      },
      {
        "name": "tb-agente-aduana-controller",
        "endpoints": [
          "PUT /api/tbagenteaduanas",
          "POST /api/tbagenteaduanas",
          "DELETE /api/tbagenteaduanas",
          "POST /api/tbagenteaduanas/model-se-ro/findAllByIdList",
          "GET /api/tbagenteaduanas/model-se-ro/{id}",
          "GET /api/tbagenteaduanas/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbagenteaduanas/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbagenteaduanas/model-se-ro/findAll",
          "GET /api/tbagenteaduanas/model-se-ro/findAllCustom",
          "GET /api/tbagenteaduanas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbagenteaduanas/model-se-ro/findAllByEstado/{estado}"
        ]
      }
    ]
  },
  {
    "module": "6. Módulo de Servicios, Rutas y Conceptos",
    "controllers": [
      {
        "name": "tb-tipo-servicio-tipo-operador-controller",
        "endpoints": [
          "PUT /api/tbtiposerviciotipooperadores",
          "POST /api/tbtiposerviciotipooperadores",
          "DELETE /api/tbtiposerviciotipooperadores",
          "GET /api/tbtiposerviciotipooperadores/{tbTipoServicio}/{idTipoOperador}"
        ]
      },
      {
        "name": "tb-tipo-servicio-controller",
        "endpoints": [
          "PUT /api/tbtiposervicios",
          "POST /api/tbtiposervicios",
          "DELETE /api/tbtiposervicios",
          "POST /api/tbtiposervicios/saveCustom",
          "GET /api/tbtiposervicios/model-se-ro/{id}",
          "GET /api/tbtiposervicios/model-se-ro/findAllCustom",
          "GET /api/tbtiposervicios/model-se-ro/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-tipo-routing-controller",
        "endpoints": [
          "PUT /api/tbtiporoutings",
          "POST /api/tbtiporoutings",
          "DELETE /api/tbtiporoutings",
          "POST /api/tbtiporoutings/model-se-ro/findAllByIdList",
          "GET /api/tbtiporoutings/model-se-ro/{id}",
          "GET /api/tbtiporoutings/model-se-ro/findAll",
          "GET /api/tbtiporoutings/model-se-ro/findAllByTbTipoServicioCodigo/{codigo}",
          "GET /api/tbtiporoutings/model-se-ro/findAllByIdTipoServicio/{idTipoServicio}",
          "GET /api/tbtiporoutings/model-se-ro/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-ruta-documento-atributo-controller",
        "endpoints": [
          "PUT /api/tbrutadocumentoatributos",
          "POST /api/tbrutadocumentoatributos",
          "DELETE /api/tbrutadocumentoatributos",
          "PUT /api/tbrutadocumentoatributos/updateAllForNroSecuencia",
          "POST /api/tbrutadocumentoatributos/model-se-ro/getRutaByCodigo/{codigo}",
          "POST /api/tbrutadocumentoatributos/model-se-ro/findAllByIdList",
          "POST /api/tbrutadocumentoatributos/insertAndDeleteAllCustom",
          "GET /api/tbrutadocumentoatributos/model-se-ro/{idRutaDocumento}/{idAtributo}",
          "GET /api/tbrutadocumentoatributos/model-se-ro/findByCodigoSgdModuloAtributo/{codigo}",
          "GET /api/tbrutadocumentoatributos/model-se-ro/findAllTbRutaDocumentoByIdSistemaCustom/{idSistema}",
          "GET /api/tbrutadocumentoatributos/model-se-ro/findAllByTbRutaDocumento/{idRutaDocumento}",
          "GET /api/tbrutadocumentoatributos/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbrutadocumentoatributos/model-se-ro/findAllByIdRutaDocumento/{idRutaDocumento}"
        ]
      },
      {
        "name": "tb-grupo-concepto-concepto-controller",
        "endpoints": [
          "PUT /api/tbgrupoconceptoconceptos",
          "POST /api/tbgrupoconceptoconceptos",
          "DELETE /api/tbgrupoconceptoconceptos",
          "POST /api/tbgrupoconceptoconceptos/model-se-ro/findAllByIdConceptoList",
          "POST /api/tbgrupoconceptoconceptos/insertAndDeleteAllCustom",
          "GET /api/tbgrupoconceptoconceptos/model-se-ro/{idGrupoConcepto}/{tbConcepto}",
          "GET /api/tbgrupoconceptoconceptos/model-se-ro/findAllIdByIdConcepto/{idConcepto}",
          "GET /api/tbgrupoconceptoconceptos/model-se-ro/findAllByIdGrupoConcepto/{idGrupoConcepto}",
          "GET /api/tbgrupoconceptoconceptos/model-se-ro/findAllByIdConcepto/{idConcepto}"
        ]
      },
      {
        "name": "tb-condicion-servicio-controller",
        "endpoints": [
          "PUT /api/tbcondicionservicios",
          "POST /api/tbcondicionservicios",
          "DELETE /api/tbcondicionservicios",
          "POST /api/tbcondicionservicios/model-se-ro/findAllByIdTipoOperadorList",
          "POST /api/tbcondicionservicios/model-se-ro/findAllByIdSistemaList",
          "POST /api/tbcondicionservicios/model-se-ro/findAllByIdList",
          "GET /api/tbcondicionservicios/model-se-ro/{id}",
          "GET /api/tbcondicionservicios/model-se-ro/findAll",
          "GET /api/tbcondicionservicios/model-se-ro/findAllByIdTipoOperador/{idTipoOperador}",
          "GET /api/tbcondicionservicios/model-se-ro/findAllByCodSistemAndEstado/{codigo}/{estado}",
          "DELETE /api/tbcondicionservicios/deleteAll"
        ]
      },
      {
        "name": "tb-concepto-via-transporte-controller",
        "endpoints": [
          "PUT /api/tbconceptoviatransportes",
          "POST /api/tbconceptoviatransportes",
          "DELETE /api/tbconceptoviatransportes",
          "POST /api/tbconceptoviatransportes/insertAndDeleteAllCustom",
          "GET /api/tbconceptoviatransportes/model-se-ro/{tbConcepto}/{idViaTransporte}",
          "GET /api/tbconceptoviatransportes/model-se-ro/findAllByIdConcepto/{idConcepto}"
        ]
      },
      {
        "name": "tb-concepto-tipo-routing-controller",
        "endpoints": [
          "PUT /api/tbconceptotiporoutinges",
          "POST /api/tbconceptotiporoutinges",
          "DELETE /api/tbconceptotiporoutinges",
          "POST /api/tbconceptotiporoutinges/insertAndDeleteAllCustom",
          "GET /api/tbconceptotiporoutinges/model-se-ro/{tbConcepto}/{idTipoRouting}",
          "GET /api/tbconceptotiporoutinges/model-se-ro/findAllByIdConcepto/{idConcepto}"
        ]
      },
      {
        "name": "tb-concepto-sistema-controller",
        "endpoints": [
          "PUT /api/tbconceptosistemas",
          "POST /api/tbconceptosistemas",
          "DELETE /api/tbconceptosistemas",
          "POST /api/tbconceptosistemas/model-se-ro/findAllTbConceptoBySearch",
          "POST /api/tbconceptosistemas/model-se-ro/findAllTbConceptoBySearchNgSelect",
          "POST /api/tbconceptosistemas/model-se-ro/findAllByIdSistemaList",
          "POST /api/tbconceptosistemas/insertAndDeleteAllCustom",
          "GET /api/tbconceptosistemas/model-se-ro/{tbConcepto}/{sciSistema}",
          "GET /api/tbconceptosistemas/model-se-ro/findAllIdByIdConceptoCustom/{idConcepto}",
          "GET /api/tbconceptosistemas/model-se-ro/findAllIdByIdConcepto/{idConcepto}",
          "GET /api/tbconceptosistemas/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbconceptosistemas/model-se-ro/existById/{idConcepto}/{idSistema}"
        ]
      },
      {
        "name": "tb-concepto-controller",
        "endpoints": [
          "PUT /api/tbconceptos",
          "POST /api/tbconceptos",
          "DELETE /api/tbconceptos",
          "POST /api/tbconceptos/validateImport",
          "POST /api/tbconceptos/validateImportWithFile",
          "POST /api/tbconceptos/model-se-ro/findAllBySearch",
          "POST /api/tbconceptos/model-se-ro/findAllByIdList",
          "POST /api/tbconceptos/model-se-ro/findAllByIdListCustom",
          "POST /api/tbconceptos/model-se-ro/findAllByCodigoConceptoControlAndTbTipoAfectacionList/{codigoConceptoControl}",
          "POST /api/tbconceptos/insertList",
          "GET /api/tbconceptos/model-se-ro/{id}",
          "GET /api/tbconceptos/model-se-ro/findByIdCustomExtend/{id}",
          "GET /api/tbconceptos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbconceptos/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbconceptos/model-se-ro/findAll",
          "GET /api/tbconceptos/model-se-ro/findAllCustom",
          "GET /api/tbconceptos/model-se-ro/findAllByIdGrupoConceptoAndCodigoViaTransporte/{idGrupoConcepto}/{codigoViaTransporte}",
          "GET /api/tbconceptos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbconceptos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbconceptos/model-se-ro/findAllByCodigoSistemaAndCodigoControlTransporteAndEstado/{codigoSistema}/{codigoControlTransporte}/{estado}",
          "GET /api/tbconceptos/model-se-ro/findAllByCodigoSistemaAndCodigoConceptoControlAndEstado/{codigoSistema}/{codigoConceptoControl}/{estado}",
          "GET /api/tbconceptos/model-se-ro/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/tbconceptos/model-se-ro/findAllByCodigoConceptoControlNotAndEstado/{codigoConceptoControl}/{estado}",
          "GET /api/tbconceptos/model-se-ro/findAllByCodigoConceptoControlAndEstado/{codigoConceptoControl}/{estado}",
          "GET /api/tbconceptos/model-se-ro/existById/{id}",
          "DELETE /api/tbconceptos/deleteInBatch",
          "DELETE /api/tbconceptos/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "7. Módulo de Documentos y Configuración de Formularios",
    "controllers": [
      {
        "name": "tb-tipo-documento-contenido-controller",
        "endpoints": [
          "PUT /api/tbtipodocumentocontenidos",
          "POST /api/tbtipodocumentocontenidos",
          "DELETE /api/tbtipodocumentocontenidos",
          "GET /api/tbtipodocumentocontenidos/model-se-ro/{id}",
          "GET /api/tbtipodocumentocontenidos/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbtipodocumentocontenidos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipodocumentocontenidos/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbtipodocumentocontenidos/deleteAll"
        ]
      },
      {
        "name": "tb-tipo-documento-contenido-ruta-documento-controller",
        "endpoints": [
          "PUT /api/tbtipodocumentocontenidorutadocumentos",
          "POST /api/tbtipodocumentocontenidorutadocumentos",
          "DELETE /api/tbtipodocumentocontenidorutadocumentos",
          "POST /api/tbtipodocumentocontenidorutadocumentos/insertAndDeleteAllCustom",
          "GET /api/tbtipodocumentocontenidorutadocumentos/model-se-ro/{tbTipoDocumentoContenido}/{idRutaDocumento}",
          "GET /api/tbtipodocumentocontenidorutadocumentos/model-se-ro/findAllByIdSistemaAndIdRutaDocumento/{idSistema}/{idRutaDocumento}",
          "GET /api/tbtipodocumentocontenidorutadocumentos/model-se-ro/findAllByCodigoRutaDocumento/{codigoRutaDocumento}"
        ]
      },
      {
        "name": "tb-formulario-campo-configuracion-controller",
        "endpoints": [
          "PUT /api/tbformulariocampoconfiguraciones",
          "POST /api/tbformulariocampoconfiguraciones",
          "DELETE /api/tbformulariocampoconfiguraciones",
          "POST /api/tbformulariocampoconfiguraciones/model-se-ro/findAllByIdList",
          "GET /api/tbformulariocampoconfiguraciones/model-se-ro/{id}",
          "GET /api/tbformulariocampoconfiguraciones/model-se-ro/findAllByIdFormulario/{idFormulario}",
          "GET /api/tbformulariocampoconfiguraciones/model-se-ro/findAllByCodigoFormulario/{codigoFormulario}"
        ]
      },
      {
        "name": "tb-configuracion-nro-orden-controller",
        "endpoints": [
          "POST /api/tbconfiguracionnroordenes/model-se-ro/findAllByCodigoSistemaList",
          "GET /api/tbconfiguracionnroordenes/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbconfiguracionnroordenes/model-se-ro/findAllByCodigoSistema/{codigoSistema}"
        ]
      }
    ]
  },
  {
    "module": "8. Módulo de Contabilidad, Moneda y Configuración Financiera",
    "controllers": [
      {
        "name": "tb-tipo-cambio-local-controller",
        "endpoints": [
          "PUT /api/tbtipocambiolocales",
          "POST /api/tbtipocambiolocales",
          "DELETE /api/tbtipocambiolocales",
          "PUT /api/tbtipocambiolocales/updateAllByFactorCustom",
          "POST /api/tbtipocambiolocales/sincronyzeTipoCambio",
          "POST /api/tbtipocambiolocales/findAllMonedaTipoCambioSunat",
          "POST /api/tbtipocambiolocales/findAllByFilter",
          "GET /api/tbtipocambiolocales/model-se-ro/{id}",
          "GET /api/tbtipocambiolocales/model-se-ro/findByIdCustom/{id}"
        ]
      },
      {
        "name": "tb-tamex-local-controller",
        "endpoints": [
          "PUT /api/tbtamexlocales",
          "POST /api/tbtamexlocales",
          "DELETE /api/tbtamexlocales",
          "POST /api/tbtamexlocales/sincronyzeTamex",
          "POST /api/tbtamexlocales/findAllByFilter",
          "GET /api/tbtamexlocales/model-se-ro/{id}"
        ]
      },
      {
        "name": "tb-serie-guia-remision-controller",
        "endpoints": [
          "PUT /api/tbserieguiaremisiones",
          "POST /api/tbserieguiaremisiones",
          "DELETE /api/tbserieguiaremisiones",
          "POST /api/tbserieguiaremisiones/model-se-ro/findAllBySearch",
          "POST /api/tbserieguiaremisiones/model-se-ro/findAllByIdList",
          "GET /api/tbserieguiaremisiones/tbtipoemisioncomprobantes/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbserieguiaremisiones/tbtipocomprobantes/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbserieguiaremisiones/tbcanalemisioncomprobantes/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbserieguiaremisiones/model-se-ro/{id}",
          "GET /api/tbserieguiaremisiones/model-se-ro/findTipoComprobanteConfiguracionByIds",
          "GET /api/tbserieguiaremisiones/model-se-ro/findByNroSerie/{nroSerie}",
          "GET /api/tbserieguiaremisiones/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbserieguiaremisiones/model-se-ro/findAll",
          "GET /api/tbserieguiaremisiones/model-se-ro/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/tbserieguiaremisiones/model-se-ro/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-detraccion-operacion-configuracion-controller",
        "endpoints": [
          "PUT /api/tbdetraccionoperacionconfiguraciones",
          "POST /api/tbdetraccionoperacionconfiguraciones",
          "DELETE /api/tbdetraccionoperacionconfiguraciones",
          "GET /api/tbdetraccionoperacionconfiguraciones/model-se-ro/{id}",
          "GET /api/tbdetraccionoperacionconfiguraciones/model-se-ro/findAll",
          "GET /api/tbdetraccionoperacionconfiguraciones/model-se-ro/findAllCustom",
          "DELETE /api/tbdetraccionoperacionconfiguraciones/deleteAll"
        ]
      },
      {
        "name": "tb-bien-servicio-configuracion-controller",
        "endpoints": [
          "PUT /api/tbbienservicioconfiguraciones",
          "POST /api/tbbienservicioconfiguraciones",
          "DELETE /api/tbbienservicioconfiguraciones",
          "GET /api/tbbienservicioconfiguraciones/model-se-ro/{id}",
          "GET /api/tbbienservicioconfiguraciones/model-se-ro/findAll",
          "GET /api/tbbienservicioconfiguraciones/model-se-ro/findAllCustom",
          "DELETE /api/tbbienservicioconfiguraciones/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "9. Módulo de Reportes, Reportes por Perfil y Etiquetas",
    "controllers": [
      {
        "name": "tb-reporte-campo-controller",
        "endpoints": [
          "PUT /api/tbreportecampos",
          "POST /api/tbreportecampos",
          "DELETE /api/tbreportecampos",
          "PUT /api/tbreportecampos/model-se-ro/updateAllForNroSecuencia",
          "POST /api/tbreportecampos/model-se-ro/findAllByIdList",
          "POST /api/tbreportecampos/insertAll",
          "GET /api/tbreportecampos/model-se-ro/{id}",
          "GET /api/tbreportecampos/model-se-ro/findTbReporteByCodigoAndCodigoSistema/{codigo}/{codigoSistema}",
          "GET /api/tbreportecampos/model-se-ro/findGroupsByCodigoAndCodigoSistema/{codigo}/{codigoSistema}",
          "GET /api/tbreportecampos/model-se-ro/findAll",
          "GET /api/tbreportecampos/model-se-ro/findAllByReporteAndSistema/{reporteId}/{sistemaId}"
        ]
      },
      {
        "name": "tb-reporte-campo-perfil-controller",
        "endpoints": [
          "PUT /api/tbreportecampoperfiles",
          "POST /api/tbreportecampoperfiles",
          "DELETE /api/tbreportecampoperfiles",
          "POST /api/tbreportecampoperfiles/model-se-ro/insertAndDelete",
          "GET /api/tbreportecampoperfiles/model-se-ro/{idPerfil}/{tbReporteCampo}",
          "GET /api/tbreportecampoperfiles/model-se-ro/findAllByIdPerfil/{idPerfil}"
        ]
      },
      {
        "name": "tb-regla-etiqueta-controller",
        "endpoints": [
          "PUT /api/tbreglaetiquetas",
          "POST /api/tbreglaetiquetas",
          "DELETE /api/tbreglaetiquetas",
          "POST /api/tbreglaetiquetas/insertCustom",
          "GET /api/tbreglaetiquetas/model-se-ro/{id}",
          "GET /api/tbreglaetiquetas/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbreglaetiquetas/deleteAll"
        ]
      },
      {
        "name": "tb-regla-etiqueta-detalle-controller",
        "endpoints": [
          "PUT /api/tbreglaetiquetadetalles",
          "POST /api/tbreglaetiquetadetalles",
          "DELETE /api/tbreglaetiquetadetalles",
          "POST /api/tbreglaetiquetadetalles/findAllByIdEtiquetaList",
          "GET /api/tbreglaetiquetadetalles/model-se-ro/{tbReglaEtiqueta}/{tbEtiqueta}"
        ]
      },
      {
        "name": "tb-etiqueta-controller",
        "endpoints": [
          "PUT /api/tbetiquetas",
          "POST /api/tbetiquetas",
          "DELETE /api/tbetiquetas",
          "GET /api/tbetiquetas/model-se-ro/{id}",
          "GET /api/tbetiquetas/model-se-ro/findAll",
          "GET /api/tbetiquetas/model-se-ro/findAllByIdTbCategoria/{idCategoria}",
          "DELETE /api/tbetiquetas/deleteAll"
        ]
      },
      {
        "name": "tb-categoria-etiqueta-controller",
        "endpoints": [
          "PUT /api/tbcategoriaetiquetas",
          "POST /api/tbcategoriaetiquetas",
          "DELETE /api/tbcategoriaetiquetas",
          "GET /api/tbcategoriaetiquetas/model-se-ro/{id}",
          "GET /api/tbcategoriaetiquetas/model-se-ro/findAll",
          "GET /api/tbcategoriaetiquetas/model-se-ro/findAllNgSelectCustom",
          "GET /api/tbcategoriaetiquetas/model-se-ro/findAllCustom",
          "GET /api/tbcategoriaetiquetas/model-se-ro/findAllByEstado/{estado}",
          "DELETE /api/tbcategoriaetiquetas/deleteAll"
        ]
      }
    ]
  },
  {
    "module": "10. Módulo de Incidencias, Hitos y Notificaciones",
    "controllers": [
      {
        "name": "tb-incidencia-usuario-controller",
        "endpoints": [
          "PUT /api/tbincidenciausuarios",
          "POST /api/tbincidenciausuarios",
          "DELETE /api/tbincidenciausuarios",
          "POST /api/tbincidenciausuarios/insertAndDeleteAllCustom",
          "GET /api/tbincidenciausuarios/model-se-ro/{tbIncidencia}/{sciUsuario}",
          "GET /api/tbincidenciausuarios/model-se-ro/findAllIdByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciausuarios/model-se-ro/findAllByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciausuarios/model-se-ro/existById/{idIncidencia}/{idUsuario}"
        ]
      },
      {
        "name": "tb-incidencia-controller",
        "endpoints": [
          "PUT /api/tbincidencias",
          "POST /api/tbincidencias",
          "DELETE /api/tbincidencias",
          "POST /api/tbincidencias/validateImport",
          "POST /api/tbincidencias/model-se-ro/findAllIdsByCodigoList",
          "POST /api/tbincidencias/model-se-ro/findAllByIdSistemaAndIdNot/{idSistema}",
          "POST /api/tbincidencias/model-se-ro/findAllByIdList",
          "POST /api/tbincidencias/insertList",
          "GET /api/tbincidencias/model-se-ro/{id}",
          "GET /api/tbincidencias/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbincidencias/model-se-ro/findByCodigoSistemaAndGrupoCatalogoOperativoAndCatalogoOperativo/{codigoSistema}/{idGrupoCatalogoOperativo}/{idCatalogoOperativo}",
          "GET /api/tbincidencias/model-se-ro/findByCodigoSistemaAndCodigoEventoInterno/{codigoSistema}/{codigoEventoInterno}",
          "GET /api/tbincidencias/model-se-ro/findAllIdsByCodigoEventoInterno/{codigoEventoInterno}",
          "GET /api/tbincidencias/model-se-ro/findAllCustom/{idSistema}",
          "GET /api/tbincidencias/model-se-ro/findAllByIdSistemaAndEstadoWhereIdEventoIsNullNgSelect/{idSistema}/{estado}",
          "GET /api/tbincidencias/model-se-ro/findAllByIdSistemaAndEstadoNgSelect/{idSistema}/{estado}",
          "GET /api/tbincidencias/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbincidencias/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbincidencias/model-se-ro/findAllByCodigoSistemaAndEstadoWhereIdEventoIsNullNgSelect/{codigoSistema}/{estado}",
          "GET /api/tbincidencias/model-se-ro/findAllByCodigoSistemaAndEstadoNgSelect/{codigoSistema}/{estado}",
          "GET /api/tbincidencias/model-se-ro/findAllByCodigoSistemaAndCodigoEventoInterno/{codigoSistema}/{codigoEventoInterno}",
          "GET /api/tbincidencias/model-se-ro/findAllByCodigoGrupoIncidenciaAndCodigoSistemaAndEstadoIncidencia/{codGrupoIncidencia}/{codSistema}/{estadoIncidencia}",
          "GET /api/tbincidencias/model-se-ro/existsByCodigoAndControlNotificacionCodigoViaEventoInterno/{codigo}/{codigoControlNotificacion}",
          "GET /api/tbincidencias/model-se-ro/existsByCodigoAndCodigoControlNotificacion/{codigo}/{codigoControlNotificacion}",
          "GET /api/tbincidencias/model-se-ro/existById/{id}",
          "DELETE /api/tbincidencias/deleteAll"
        ]
      },
      {
        "name": "tb-incidencia-rol-controller",
        "endpoints": [
          "PUT /api/tbincidenciaroles",
          "POST /api/tbincidenciaroles",
          "DELETE /api/tbincidenciaroles",
          "POST /api/tbincidenciaroles/insertAndDeleteAllCustom",
          "GET /api/tbincidenciaroles/model-se-ro/{tbIncidencia}/{sciRol}",
          "GET /api/tbincidenciaroles/model-se-ro/findAllByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciaroles/model-se-ro/existById/{idIncidencia}/{idRol}"
        ]
      },
      {
        "name": "tb-incidencia-hito-controller",
        "endpoints": [
          "PUT /api/tbincidenciahitos",
          "POST /api/tbincidenciahitos",
          "DELETE /api/tbincidenciahitos",
          "POST /api/tbincidenciahitos/insertAndDeleteAllCustom",
          "GET /api/tbincidenciahitos/model-se-ro/{tbIncidencia}/{tbHito}",
          "GET /api/tbincidenciahitos/model-se-ro/findAllByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciahitos/model-se-ro/existById/{idIncidencia}/{idHito}"
        ]
      },
      {
        "name": "tb-incidencia-grupo-incidencia-controller",
        "endpoints": [
          "PUT /api/tbincidenciagrupoincidencias",
          "POST /api/tbincidenciagrupoincidencias",
          "DELETE /api/tbincidenciagrupoincidencias",
          "POST /api/tbincidenciagrupoincidencias/model-se-ro/findAllIncidenciasByCodigoGrupoIncidenciaList",
          "POST /api/tbincidenciagrupoincidencias/insertAndDeleteAllCustom",
          "GET /api/tbincidenciagrupoincidencias/model-se-ro/{tbIncidencia}/{idGrupoIncidencia}",
          "GET /api/tbincidenciagrupoincidencias/model-se-ro/findAllByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciagrupoincidencias/model-se-ro/existById/{idIncidencia}/{idGrupoIncidencia}"
        ]
      },
      {
        "name": "tb-incidencia-control-notificacion-controller",
        "endpoints": [
          "PUT /api/tbincidenciacontrolnotificaciones",
          "POST /api/tbincidenciacontrolnotificaciones",
          "DELETE /api/tbincidenciacontrolnotificaciones",
          "POST /api/tbincidenciacontrolnotificaciones/insertAndDeleteAllCustom",
          "GET /api/tbincidenciacontrolnotificaciones/model-se-ro/{tbIncidencia}/{tbControlNotificacion}",
          "GET /api/tbincidenciacontrolnotificaciones/model-se-ro/findAllByIdIncidencia/{idIncidencia}",
          "GET /api/tbincidenciacontrolnotificaciones/model-se-ro/existById/{idIncidencia}/{idControlNotificacion}"
        ]
      }
    ]
  },
  {
    "module": "11. Módulo de Eventos, Acciones y Condiciones",
    "controllers": [
      {
        "name": "tb-evento-controller",
        "endpoints": [
          "PUT /api/tbeventos",
          "POST /api/tbeventos",
          "DELETE /api/tbeventos",
          "POST /api/tbeventos/executeEventos",
          "POST /api/tbeventos/executeEventosAsync",
          "GET /api/tbeventos/model-se-ro/{id}",
          "GET /api/tbeventos/model-se-ro/findByIdEventoInterno/{idEventoInterno}",
          "GET /api/tbeventos/model-se-ro/findAll",
          "GET /api/tbeventos/model-se-ro/findAllByCodigoSistema/{codSistema}",
          "GET /api/tbeventos/model-se-ro/findAllByCodSistemaAndCodIncidencia/{codSistema}/{codIncidencia}",
          "GET /api/tbeventos/model-se-ro/findAllByCodSistema/{codSistema}",
          "GET /api/tbeventos/model-se-ro/findAllByApiList/{id}",
          "DELETE /api/tbeventos/deleteAll"
        ]
      },
      {
        "name": "tb-evento-notificacion-controller",
        "endpoints": [
          "PUT /api/tbeventonotificaciones",
          "POST /api/tbeventonotificaciones",
          "DELETE /api/tbeventonotificaciones",
          "POST /api/tbeventonotificaciones/model-se-ro/findAllByIdEventoList",
          "GET /api/tbeventonotificaciones/model-se-ro/{tbEvento}/{idTipoDocumento}/{idTipoFormato}/{idControlNotificacion}"
        ]
      },
      {
        "name": "tb-evento-condicion-valor-controller",
        "endpoints": [
          "PUT /api/tbeventocondicionvalores",
          "POST /api/tbeventocondicionvalores",
          "DELETE /api/tbeventocondicionvalores",
          "POST /api/tbeventocondicionvalores/model-se-ro/findAllByIdEventoList",
          "GET /api/tbeventocondicionvalores/model-se-ro/{tbEventoCondicion}/{tbEventoCondicionCatalogoEventoInterno}/{idTabla}"
        ]
      },
      {
        "name": "tb-evento-condicion-controller",
        "endpoints": [
          "PUT /api/tbeventocondiciones",
          "POST /api/tbeventocondiciones",
          "DELETE /api/tbeventocondiciones",
          "POST /api/tbeventocondiciones/model-se-ro/findAllByIdEventoList",
          "GET /api/tbeventocondiciones/model-se-ro/{tbEvento}/{idCatalogoEventoInterno}",
          "GET /api/tbeventocondiciones/model-se-ro/findAllByIdEvento/{idEvento}"
        ]
      },
      {
        "name": "tb-evento-accion-controller",
        "endpoints": [
          "PUT /api/tbeventoacciones",
          "POST /api/tbeventoacciones",
          "DELETE /api/tbeventoacciones",
          "POST /api/tbeventoacciones/model-se-ro/findAllByIdEventoList",
          "GET /api/tbeventoacciones/model-se-ro/{tbEvento}/{idAccionEventoInterno}/{idTabla}",
          "GET /api/tbeventoacciones/model-se-ro/findAllByIdEvento/{idEvento}"
        ]
      }
    ]
  },
  {
    "module": "12. Módulo de Depósitos, Infraestructura y Conexiones",
    "controllers": [
      {
        "name": "tb-proyecto-controller",
        "endpoints": [
          "PUT /api/tbproyectos",
          "POST /api/tbproyectos",
          "DELETE /api/tbproyectos",
          "POST /api/tbproyectos/model-se-ro/findAllByIdList",
          "GET /api/tbproyectos/model-se-ro/{id}",
          "GET /api/tbproyectos/model-se-ro/findAll",
          "GET /api/tbproyectos/model-se-ro/existById/{id}",
          "DELETE /api/tbproyectos/deleteAll"
        ]
      },
      {
        "name": "tb-proveedor-controller",
        "endpoints": [
          "PUT /api/tbproveedores",
          "POST /api/tbproveedores",
          "DELETE /api/tbproveedores",
          "POST /api/tbproveedores/validateImport",
          "POST /api/tbproveedores/validateImportWithFile",
          "POST /api/tbproveedores/findCustomDto",
          "POST /api/tbproveedores/model-se-ro/findAllByIdTipoCompraAndIdTipoContribuyenteListCustom/{idTipoCompra}",
          "POST /api/tbproveedores/model-se-ro/findAllByIdList",
          "POST /api/tbproveedores/insertList",
          "GET /api/tbproveedores/model-se-ro/{id}",
          "GET /api/tbproveedores/model-se-ro/findByRazonSocialOrNroDocumentoLikeCustom/{valueLikeAs}",
          "GET /api/tbproveedores/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbproveedores/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbproveedores/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbproveedores/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbproveedores/model-se-ro/findAll",
          "GET /api/tbproveedores/model-se-ro/findAllCustom",
          "GET /api/tbproveedores/model-se-ro/findAllByNroDocumento/{nroDocumento}",
          "GET /api/tbproveedores/model-se-ro/findAllByIdTipoCompraAndEstado/{idTipoCompra}/{estado}",
          "GET /api/tbproveedores/model-se-ro/findAllByEstadoOrdenCompra/{estado}",
          "GET /api/tbproveedores/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbproveedores/model-se-ro/findAllByEstadoAndTipoEntidadNgSelect/{estado}/{tipoEntidad}",
          "GET /api/tbproveedores/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbproveedores/model-se-ro/existByIdForEstado/{id}",
          "GET /api/tbproveedores/model-se-ro/existById/{id}",
          "DELETE /api/tbproveedores/deleteAll"
        ]
      },
      {
        "name": "tb-parametro-local-perfil-controller",
        "endpoints": [
          "PUT /api/tbparametrolocalperfiles",
          "POST /api/tbparametrolocalperfiles",
          "POST /api/tbparametrolocalperfiles/deleteAll",
          "GET /api/tbparametrolocalperfiles/model-se-ro/findByCompositeId/{idParametro}/{idPerfil}",
          "GET /api/tbparametrolocalperfiles/model-se-ro/findByCodigoSistemaCodigoParametroIdPerfil/{codigoSistema}/{codigoParametro}/{idPerfil}",
          "GET /api/tbparametrolocalperfiles/findAllByIdSistemaAndIdPerfil/{idSistema}/{idPerfil}",
          "DELETE /api/tbparametrolocalperfiles/{idParametro}/{idPerfil}"
        ]
      },
      {
        "name": "tb-parametro-local-controller",
        "endpoints": [
          "PUT /api/tbparametrolocales",
          "POST /api/tbparametrolocales/model-se-ro/findAllByCodigoSistemaAndCodigoList/{codigoSistema}",
          "GET /api/tbparametrolocales/model-se-ro/{id}",
          "GET /api/tbparametrolocales/model-se-ro/findByCodigoSistemaAndCodigo/{codigoSistema}/{codigo}",
          "GET /api/tbparametrolocales/findAll",
          "GET /api/tbparametrolocales/findAllByIdSistemaAndCtrlEspecial/{idSistema}/{ctrlEspecial}",
          "GET /api/tbparametrolocales/findAllByIdSistemaAndCtrlConfigurablePerfil/{idSistema}/{ctrlConfigurablePerfil}",
          "GET /api/tbparametrolocales/findAllByIdSistema/{idSistema}"
        ]
      },
      {
        "name": "tb-nave-controller",
        "endpoints": [
          "PUT /api/tbnaves",
          "POST /api/tbnaves",
          "DELETE /api/tbnaves",
          "PUT /api/tbnaves/model-se-ro/uploadImage/{id}",
          "POST /api/tbnaves/validateImportWithFile",
          "POST /api/tbnaves/model-se-ro/findAllByIdList",
          "POST /api/tbnaves/insertList",
          "GET /api/tbnaves/model-se-ro/{id}",
          "GET /api/tbnaves/model-se-ro/findAll",
          "GET /api/tbnaves/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbnaves/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/tbnaves/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbnaves/model-se-ro/existById/{id}"
        ]
      },
      {
        "name": "tb-division-controller",
        "endpoints": [
          "PUT /api/tbdivisiones",
          "POST /api/tbdivisiones",
          "DELETE /api/tbdivisiones",
          "POST /api/tbdivisiones/model-se-ro/findAllByIdList",
          "POST /api/tbdivisiones/model-se-ro/findAllByCtrlPredeterminadoAndSciSistema/{ctrlPredeterminado}",
          "POST /api/tbdivisiones/model-se-ro/findAllByCodigoList",
          "GET /api/tbdivisiones/model-se-ro/{id}",
          "GET /api/tbdivisiones/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbdivisiones/model-se-ro/findByCodigoAndIdSistemaCustom/{codigo}/{idSistema}",
          "GET /api/tbdivisiones/model-se-ro/findAllByIdSistemaAndEstadoNgSelect/{idSistema}/{estado}",
          "GET /api/tbdivisiones/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbdivisiones/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbdivisiones/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/tbdivisiones/model-se-ro/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/tbdivisiones/model-se-ro/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/tbdivisiones/model-se-ro/existById/{id}",
          "DELETE /api/tbdivisiones/deleteAll"
        ]
      },
      {
        "name": "tb-deposito-tipo-operador-controller",
        "endpoints": [
          "PUT /api/tbdepositotipooperadores",
          "POST /api/tbdepositotipooperadores",
          "DELETE /api/tbdepositotipooperadores",
          "GET /api/tbdepositotipooperadores/{tbDeposito}/{idTipoOperador}"
        ]
      },
      {
        "name": "tb-depositos-controller",
        "endpoints": [
          "PUT /api/tbdepositos",
          "POST /api/tbdepositos",
          "DELETE /api/tbdepositos",
          "POST /api/tbdepositos/validateImport",
          "POST /api/tbdepositos/validateImportWithFile",
          "POST /api/tbdepositos/model-se-ro/findAllByIdList",
          "POST /api/tbdepositos/insertList",
          "POST /api/tbdepositos/generateDeposito",
          "GET /api/tbdepositos/model-se-ro/{id}",
          "GET /api/tbdepositos/model-se-ro/findByNroDocumentoCustom/{nroDocumento}",
          "GET /api/tbdepositos/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbdepositos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbdepositos/model-se-ro/findAll",
          "GET /api/tbdepositos/model-se-ro/findAllCustom",
          "GET /api/tbdepositos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbdepositos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbdepositos/model-se-ro/existById/{id}",
          "DELETE /api/tbdepositos/deleteAll"
        ]
      },
      {
        "name": "tb-deposito-jurisdiccion-controller",
        "endpoints": [
          "PUT /api/tbdepositojurisdicciones",
          "POST /api/tbdepositojurisdicciones",
          "DELETE /api/tbdepositojurisdicciones",
          "GET /api/tbdepositojurisdicciones/{id}"
        ]
      },
      {
        "name": "tb-credencial-conexion-controller",
        "endpoints": [
          "PUT /api/tbcredencialconexiones",
          "POST /api/tbcredencialconexiones",
          "DELETE /api/tbcredencialconexiones",
          "POST /api/tbcredencialconexiones/model-se-ro/findAllByIdList",
          "GET /api/tbcredencialconexiones/model-se-ro/{id}",
          "GET /api/tbcredencialconexiones/model-se-ro/findByIdSistemaAndIdPlataformaConexionAndCtrlEnvioPrueba/{idSistema}/{idPlataformaConexion}/{ctrlEnvioPrueba}",
          "GET /api/tbcredencialconexiones/model-se-ro/findAll",
          "GET /api/tbcredencialconexiones/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/tbcredencialconexiones/model-se-ro/findAllByCodSistemaAndCodPlataformaConexion/{codSistema}/{codPlataformaConexion}"
        ]
      },
      {
        "name": "tb-contrato-entidad-controller",
        "endpoints": [
          "PUT /api/tbcontratoentidades",
          "POST /api/tbcontratoentidades",
          "DELETE /api/tbcontratoentidades",
          "POST /api/tbcontratoentidades/model-se-ro/findAllByIdList",
          "GET /api/tbcontratoentidades/model-se-ro/{id}",
          "GET /api/tbcontratoentidades/model-se-ro/findAll",
          "GET /api/tbcontratoentidades/model-se-ro/findAllByIdEntidadAndEstadoNgSelect/{idEntidad}/{estado}",
          "GET /api/tbcontratoentidades/model-se-ro/findAllByIdEntidad/{idEntidad}",
          "GET /api/tbcontratoentidades/model-se-ro/existById/{id}",
          "DELETE /api/tbcontratoentidades/deleteAll"
        ]
      },
      {
        "name": "smx-sincronizacion-local-controller",
        "endpoints": [
          "PUT /api/smxsincronizacionlocales",
          "POST /api/smxsincronizacionlocales",
          "DELETE /api/smxsincronizacionlocales",
          "POST /api/smxsincronizacionlocales/multi-service-handler",
          "GET /api/smxsincronizacionlocales/{id}"
        ]
      }
    ]
  },
  {
    "module": "13. Módulo Core de Sistema, SQS y Servicios DMS (Gestión Documental)",
    "controllers": [
      {
        "name": "sns-controller",
        "endpoints": [
          "POST /api/sns/read-sqs-queue",
          "POST /api/sns/login-notifications"
        ]
      },
      {
        "name": "sgd-contenido-controller",
        "endpoints": [
          "POST /api/sgdcontenido/uploadFile",
          "GET /api/sgdcontenido/downloadFile/{id}",
          "DELETE /api/sgdcontenido/delete/{idContenido}"
        ]
      },
      {
        "name": "sgd-tipo-documento-controller",
        "endpoints": [
          "GET /api/sgdtipodocumento/findAllActivesByCodModulo/{codigo}"
        ]
      },
      {
        "name": "sgd-tipo-archivo-controller",
        "endpoints": [
          "GET /api/sgdtipoarchivo/findAllActives"
        ]
      },
      {
        "name": "sgd-security-controller",
        "endpoints": [
          "GET /api/dms/auth/login/{nroDocumento}"
        ]
      }
    ]
  }
];
