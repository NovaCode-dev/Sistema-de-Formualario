import { SystemModule } from './types';

export const CONFIG_DATA: SystemModule[] = [
  {
    "module": "Configuración",
    "controllers": [
      {
        "name": "email-verification-controller",
        "endpoints": [
          "GET /api/email-verification/config/auto-verify",
          "GET /api/email-verification/status/{nroDocumento}/{usuario}",
          "POST /api/email-verification/verify"
        ]
      },
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
        "name": "sci-acceso-controller",
        "endpoints": [
          "DELETE /api/sciaccesos",
          "GET /api/sciaccesos/model-se-ro/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/sciaccesos/model-se-ro/findAllByCodigoSistemaAndIdOficina/{codigoSistema}/{idOficina}",
          "GET /api/sciaccesos/model-se-ro/findAllByIdPerfilCustom/{idPerfil}",
          "GET /api/sciaccesos/model-se-ro/findAllByIdPerfilForAcceso/{idPerfil}",
          "GET /api/sciaccesos/model-se-ro/findAllByIdUsuarioCustom/{idUsuario}",
          "GET /api/sciaccesos/model-se-ro/findAllByUsuarioCustom/{usuario}",
          "GET /api/sciaccesos/model-se-ro/findAllGlobalByCodigoSistema/{codigoSistema}",
          "GET /api/sciaccesos/model-se-ro/findAllSciSistemaByUsuario/{usuario}",
          "GET /api/sciaccesos/model-se-ro/findIdFormularioListByUsuario/{usuario}",
          "GET /api/sciaccesos/model-se-ro/{idPerfil}/{idFormulario}/{idAccion}",
          "POST /api/sciaccesos",
          "POST /api/sciaccesos/insertAndDeleteAllCustom",
          "POST /api/sciaccesos/model-se-ro/findAllByCodigoSistemaCustom",
          "POST /api/sciaccesos/model-se-ro/validateAcceso",
          "PUT /api/sciaccesos"
        ]
      },
      {
        "name": "sci-area-controller",
        "endpoints": [
          "DELETE /api/sciareas",
          "DELETE /api/sciareas/deleteAll",
          "GET /api/sciareas/model-se-ro/findAll",
          "GET /api/sciareas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/sciareas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/sciareas/model-se-ro/findLastCodigo",
          "GET /api/sciareas/model-se-ro/{id}",
          "POST /api/sciareas",
          "POST /api/sciareas/insertList",
          "PUT /api/sciareas"
        ]
      },
      {
        "name": "sci-cargo-controller",
        "endpoints": [
          "DELETE /api/scicargos",
          "DELETE /api/scicargos/deleteAll",
          "GET /api/scicargos/model-se-ro/findAll",
          "GET /api/scicargos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/scicargos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/scicargos/model-se-ro/findLastCodigo",
          "GET /api/scicargos/model-se-ro/{id}",
          "POST /api/scicargos",
          "POST /api/scicargos/insertList",
          "PUT /api/scicargos"
        ]
      },
      {
        "name": "sci-contenido-tablero-usuario-controller",
        "endpoints": [
          "DELETE /api/scicontenidotablerousuarios",
          "GET /api/scicontenidotablerousuarios/model-se-ro/findAllByIdUsuarioAndIdSistema/{idUsuario}/{idSistema}",
          "GET /api/scicontenidotablerousuarios/model-se-ro/{idSistema}/{idUsuario}/{idContenidoTablero}",
          "POST /api/scicontenidotablerousuarios",
          "POST /api/scicontenidotablerousuarios/insertAndDeleteAllCustom",
          "PUT /api/scicontenidotablerousuarios"
        ]
      },
      {
        "name": "sci-empresa-controller",
        "endpoints": [
          "DELETE /api/sciempresas",
          "GET /api/sciempresas/model-se-ro/findAll",
          "GET /api/sciempresas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/sciempresas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/sciempresas/model-se-ro/findByIdCustom/{id}",
          "GET /api/sciempresas/model-se-ro/findByNroDocumento/{nroDocumento}",
          "GET /api/sciempresas/model-se-ro/{id}",
          "POST /api/sciempresas",
          "POST /api/sciempresas/model-se-ro/findAllByIdList",
          "PUT /api/sciempresas/update"
        ]
      },
      {
        "name": "sci-establecimiento-anexo-controller",
        "endpoints": [
          "DELETE /api/sciestablecimientoanexos",
          "DELETE /api/sciestablecimientoanexos/deleteAll",
          "GET /api/sciestablecimientoanexos/model-se-ro/findAll",
          "GET /api/sciestablecimientoanexos/model-se-ro/findAllByCtrlPredeterminadoAndEstado/{ctrlPredeterminado}/{estado}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findAllByEstadoCustom/{estado}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findAllByIdEmpresa/{idEmpresa}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findByCodigo/{codigo}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findByIdCustom/{idEstablecimientoAnexo}",
          "GET /api/sciestablecimientoanexos/model-se-ro/findByIdEmpresaAndCtrlPredeterminado/{idEmpresa}/{ctrlPredeterminado}",
          "GET /api/sciestablecimientoanexos/model-se-ro/{id}",
          "POST /api/sciestablecimientoanexos",
          "POST /api/sciestablecimientoanexos/saveAll",
          "PUT /api/sciestablecimientoanexos"
        ]
      },
      {
        "name": "sci-formulario-configuracion-controller",
        "endpoints": [
          "DELETE /api/sciformularioconfiguraciones",
          "GET /api/sciformularioconfiguraciones/model-se-ro/findSciFormularioByCodigo/{codigo}",
          "GET /api/sciformularioconfiguraciones/model-se-ro/{id}",
          "POST /api/sciformularioconfiguraciones",
          "POST /api/sciformularioconfiguraciones/insertByList",
          "POST /api/sciformularioconfiguraciones/model-se-ro/findAllByIdList",
          "POST /api/sciformularioconfiguraciones/model-se-ro/findAllTbFormularioByCodigoSistemaList",
          "POST /api/sciformularioconfiguraciones/model-se-ro/findAllTbFormularioByIdSistemaList",
          "PUT /api/sciformularioconfiguraciones"
        ]
      },
      {
        "name": "sci-grupo-empresarial-controller",
        "endpoints": [
          "DELETE /api/scigrupoempresariales",
          "GET /api/scigrupoempresariales/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/scigrupoempresariales/model-se-ro/{id}",
          "POST /api/scigrupoempresariales",
          "PUT /api/scigrupoempresariales"
        ]
      },
      {
        "name": "sci-licencia-controller",
        "endpoints": [
          "DELETE /api/scilicencias",
          "DELETE /api/scilicencias/deleteAll",
          "GET /api/scilicencias/model-se-ro/countLicenciasGroupedBySistema",
          "GET /api/scilicencias/model-se-ro/findAllByIdSistema/{idSistema}",
          "GET /api/scilicencias/model-se-ro/findAllCantidadLicenciaSistemaCustom",
          "GET /api/scilicencias/model-se-ro/findAllCantidadLicenciaSistemaCustomByIdSistema/{idSistema}",
          "GET /api/scilicencias/model-se-ro/findAllSciUsuarioAvailableByIdSistema/{idSistema}",
          "GET /api/scilicencias/model-se-ro/getResumenLicencias",
          "GET /api/scilicencias/model-se-ro/{idSistema}/{sciUsuario}",
          "POST /api/scilicencias",
          "POST /api/scilicencias/insertAll",
          "PUT /api/scilicencias"
        ]
      },
      {
        "name": "sci-licencia-grupo-sistema-comercial-controller",
        "endpoints": [
          "DELETE /api/scilicenciagruposistemacomerciales/deleteAll",
          "DELETE /api/scilicenciagruposistemacomerciales/{idGrupoSistemaComercial}/{idUsuario}",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/countUsuariosByGrupoSistemaComercial/{idGrupoSistemaComercial}",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/countUsuariosGroupedByGrupoSistemaComercial",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/findAllByIdGrupoSistemaComercial/{idGrupoSistemaComercial}",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/findAllCantidadLicenciaGrupoSistemaComercialCustom",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/findAllCantidadLicenciaGrupoSistemaComercialCustomByIdGrupoSistemaComercial/{idGrupoSistemaComercial}",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/findAllSciUsuarioAvailableByIdGrupoSistemaComercial/{idGrupoSistemaComercial}",
          "GET /api/scilicenciagruposistemacomerciales/model-se-ro/{idGrupoSistemaComercial}/{idUsuario}",
          "POST /api/scilicenciagruposistemacomerciales",
          "POST /api/scilicenciagruposistemacomerciales/insertAll",
          "PUT /api/scilicenciagruposistemacomerciales"
        ]
      },
      {
        "name": "sci-oficina-controller",
        "endpoints": [
          "DELETE /api/scioficinas",
          "DELETE /api/scioficinas/deleteAll",
          "GET /api/scioficinas/model-se-ro/findAll",
          "GET /api/scioficinas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/scioficinas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/scioficinas/model-se-ro/findByCodigo/{codigo}",
          "GET /api/scioficinas/model-se-ro/findByCodigoAndIdUsuario/{codigo}/{idUsuario}",
          "GET /api/scioficinas/model-se-ro/findByIdCustom/{id}",
          "GET /api/scioficinas/model-se-ro/findOficinaPredeterminada",
          "GET /api/scioficinas/model-se-ro/{id}",
          "POST /api/scioficinas",
          "POST /api/scioficinas/insertAll",
          "POST /api/scioficinas/model-se-ro/findAllByIdList",
          "POST /api/scioficinas/model-se-ro/findAllByIdListCustom",
          "POST /api/scioficinas/model-se-ro/insertList",
          "PUT /api/scioficinas"
        ]
      },
      {
        "name": "sci-oficina-sistema-controller",
        "endpoints": [
          "DELETE /api/scioficinasistemas",
          "GET /api/scioficinasistemas/model-se-ro/findAllSciOficinaByCodigoSistema/{codigoSistema}",
          "GET /api/scioficinasistemas/model-se-ro/findAllSciOficinaByIdSistema/{idSistema}",
          "GET /api/scioficinasistemas/model-se-ro/{idOficina}/{idSistema}",
          "POST /api/scioficinasistemas",
          "PUT /api/scioficinasistemas"
        ]
      },
      {
        "name": "sci-perfil-contenido-tablero-controller",
        "endpoints": [
          "DELETE /api/sciperfilcontenidotableros",
          "GET /api/sciperfilcontenidotableros/model-se-ro/findAllIdContenidoTableroByIdPerfil/{idPerfil}",
          "GET /api/sciperfilcontenidotableros/model-se-ro/{idPerfil}/{idContenidoTablero}",
          "POST /api/sciperfilcontenidotableros",
          "POST /api/sciperfilcontenidotableros/insertAndDeleteAllCustom",
          "PUT /api/sciperfilcontenidotableros"
        ]
      },
      {
        "name": "sci-perfil-controller",
        "endpoints": [
          "DELETE /api/sciperfiles",
          "DELETE /api/sciperfiles/deleteAll",
          "DELETE /api/sciperfiles/deleteAndValidateConstrains",
          "GET /api/sciperfiles/model-se-ro/findAll",
          "GET /api/sciperfiles/model-se-ro/findAllByEstado/{estado}",
          "GET /api/sciperfiles/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/sciperfiles/model-se-ro/findLastCodigo",
          "GET /api/sciperfiles/model-se-ro/{id}",
          "POST /api/sciperfiles",
          "POST /api/sciperfiles/copyAccesos",
          "POST /api/sciperfiles/insertList",
          "PUT /api/sciperfiles"
        ]
      },
      {
        "name": "sci-perfil-reporte-controller",
        "endpoints": [
          "DELETE /api/sciperfilreportes",
          "GET /api/sciperfilreportes/model-se-ro/findAll",
          "GET /api/sciperfilreportes/model-se-ro/{sciPerfil}/{idReporte}",
          "POST /api/sciperfilreportes",
          "PUT /api/sciperfilreportes"
        ]
      },
      {
        "name": "sci-tipo-documento-emitido-controller",
        "endpoints": [
          "DELETE /api/scitipodocumentoemitidos",
          "DELETE /api/scitipodocumentoemitidos/deleteAll",
          "GET /api/scitipodocumentoemitidos/model-se-ro/findAll",
          "GET /api/scitipodocumentoemitidos/model-se-ro/findAllByEstado/{estado}",
          "GET /api/scitipodocumentoemitidos/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/scitipodocumentoemitidos/model-se-ro/findAllByIdCategoriaDocumentoEmitido/{idCategoriaDocumentoEmitido}",
          "GET /api/scitipodocumentoemitidos/model-se-ro/{id}",
          "POST /api/scitipodocumentoemitidos",
          "PUT /api/scitipodocumentoemitidos"
        ]
      },
      {
        "name": "sci-usuario-cliente-controller",
        "endpoints": [
          "DELETE /api/sciusuarioclientes",
          "GET /api/sciusuarioclientes/model-se-ro/{idUsuario}/{idCliente}",
          "POST /api/sciusuarioclientes",
          "PUT /api/sciusuarioclientes"
        ]
      },
      {
        "name": "sci-usuario-controller",
        "endpoints": [
          "DELETE /api/sciusuarios",
          "DELETE /api/sciusuarios/delete/{nroDocumento}",
          "DELETE /api/sciusuarios/deleteAll",
          "GET /api/sciusuarios/model-se-ro/findAll",
          "GET /api/sciusuarios/model-se-ro/findAllByEstado/{estado}",
          "GET /api/sciusuarios/model-se-ro/findAllCustom",
          "GET /api/sciusuarios/model-se-ro/findByCorreoElectronico/{correoElectronico}",
          "GET /api/sciusuarios/model-se-ro/findByIdCustomWithPerfil/{id}",
          "GET /api/sciusuarios/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/sciusuarios/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/sciusuarios/model-se-ro/findByUsuario/{usuario}",
          "GET /api/sciusuarios/model-se-ro/{id}",
          "POST /api/sciusuarios",
          "POST /api/sciusuarios/insert/{nroDocumento}",
          "POST /api/sciusuarios/insertAllWithPerfilList/{nroDocumento}",
          "POST /api/sciusuarios/insertLite",
          "POST /api/sciusuarios/insertWithPerfilList/{nroDocumento}",
          "POST /api/sciusuarios/model-se-ro/findAllByIdList",
          "POST /api/sciusuarios/model-se-ro/findAllByIdListCustomWithPerfil",
          "POST /api/sciusuarios/model-se-ro/findAllByIdOficinaList",
          "POST /api/sciusuarios/validateImport",
          "PUT /api/sciusuarios",
          "PUT /api/sciusuarios/resetPasswordByPersona/{idPersona}",
          "PUT /api/sciusuarios/update/{nroDocumento}",
          "PUT /api/sciusuarios/updateWithPerfilList/{nroDocumento}"
        ]
      },
      {
        "name": "sci-usuario-oficina-controller",
        "endpoints": [
          "DELETE /api/sciusuariooficinas",
          "GET /api/sciusuariooficinas/model-se-ro/findAll",
          "GET /api/sciusuariooficinas/model-se-ro/findAllByIdOficina/{idOficina}",
          "GET /api/sciusuariooficinas/model-se-ro/findAllByIdUsuario/{idUsuario}",
          "GET /api/sciusuariooficinas/model-se-ro/findAllByIdUsuarioCustom/{idUsuario}",
          "GET /api/sciusuariooficinas/model-se-ro/{idUsuario}/{idOficina}",
          "POST /api/sciusuariooficinas",
          "POST /api/sciusuariooficinas/insertAllCustom",
          "POST /api/sciusuariooficinas/insertAndDeleteAllCustom",
          "PUT /api/sciusuariooficinas"
        ]
      },
      {
        "name": "sci-usuario-perfil-controller",
        "endpoints": [
          "DELETE /api/sciusuarioperfiles",
          "GET /api/sciusuarioperfiles/model-se-ro/findAll",
          "GET /api/sciusuarioperfiles/model-se-ro/findAllByIdPerfil/{idPerfil}",
          "GET /api/sciusuarioperfiles/model-se-ro/findAllByIdUsuario/{idUsuario}",
          "GET /api/sciusuarioperfiles/model-se-ro/{idUsuario}/{idPerfil}",
          "POST /api/sciusuarioperfiles",
          "POST /api/sciusuarioperfiles/insertAllCustom",
          "POST /api/sciusuarioperfiles/insertAndDeleteAllCustom",
          "PUT /api/sciusuarioperfiles"
        ]
      },
      {
        "name": "sci-usuario-proyecto-controller",
        "endpoints": [
          "DELETE /api/sciusuarioproyectos",
          "GET /api/sciusuarioproyectos/model-se-ro/{idUsuario}/{idProyecto}",
          "POST /api/sciusuarioproyectos",
          "PUT /api/sciusuarioproyectos"
        ]
      },
      {
        "name": "sgd-contenido-controller",
        "endpoints": [
          "DELETE /api/sgdcontenido/delete/{idContenido}",
          "GET /api/sgdcontenido/downloadFile/{id}",
          "POST /api/sgdcontenido/uploadFile"
        ]
      },
      {
        "name": "sgd-empresa-controller",
        "endpoints": [
          "GET /api/sgdempresa/findSgdEmpresaByNroDocumento"
        ]
      },
      {
        "name": "sgd-tipo-archivo-controller",
        "endpoints": [
          "GET /api/sgdtipoarchivo/findAllActives"
        ]
      },
      {
        "name": "sgd-tipo-documento-controller",
        "endpoints": [
          "GET /api/sgdtipodocumento/findAllActivesByCodModulo/{codigo}"
        ]
      },
      {
        "name": "tb-ejecutivo-controller",
        "endpoints": [
          "DELETE /api/tbejecutivos",
          "DELETE /api/tbejecutivos/deleteAll",
          "GET /api/tbejecutivos/model-se-ro/existById/{id}",
          "GET /api/tbejecutivos/model-se-ro/findAll",
          "GET /api/tbejecutivos/model-se-ro/findAllCustom",
          "GET /api/tbejecutivos/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbejecutivos/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbejecutivos/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbejecutivos/model-se-ro/{id}",
          "POST /api/tbejecutivos",
          "POST /api/tbejecutivos/insertList",
          "POST /api/tbejecutivos/insertLite",
          "POST /api/tbejecutivos/model-se-ro/findAllByIdList",
          "POST /api/tbejecutivos/model-se-ro/findAllByNroDocumentoList",
          "POST /api/tbejecutivos/saveAll",
          "POST /api/tbejecutivos/validateImport",
          "POST /api/tbejecutivos/validateImportWithFile",
          "PUT /api/tbejecutivos"
        ]
      },
      {
        "name": "tb-ejecutivo-rol-cliente-controller",
        "endpoints": [
          "DELETE /api/tbejecutivorolclientes/deleteAll",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAll",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAllByIdEjecutivo/{idEjecutivo}",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAllByIdRol/{idRol}",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAllByIdRolAndIdEjecutivo/{idRol}/{idEjecutivo}",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAllClientesByIdRolAndIdEjecutivo/{idRol}/{idEjecutivo}",
          "GET /api/tbejecutivorolclientes/model-se-ro/findAllClientesByIdRolAndIdEjecutivoAndRazonSocialOrNroDocumentoLike/{idRol}/{idEjecutivo}/{nombreOrNroDocumento}",
          "GET /api/tbejecutivorolclientes/model-se-ro/hasClientesByIdRolAndIdEjecutivo/{idRol}/{idEjecutivo}",
          "POST /api/tbejecutivorolclientes/insertAndDeleteAllCustom"
        ]
      },
      {
        "name": "tb-ejecutivo-rol-controller",
        "endpoints": [
          "DELETE /api/tbejecutivoroles",
          "GET /api/tbejecutivoroles/model-se-ro/existById/{idEjecutivo}/{idRol}",
          "GET /api/tbejecutivoroles/model-se-ro/findAllByCodigoRolAndEstadoNgSelect/{codigo}/{estado}",
          "GET /api/tbejecutivoroles/model-se-ro/findAllByIdEjecutivoCustom/{idEjecutivo}",
          "GET /api/tbejecutivoroles/model-se-ro/findAllByIdRolAndEstadoNgSelect/{idRol}/{estado}",
          "GET /api/tbejecutivoroles/model-se-ro/findAllIdByIdEjecutivo/{idEjecutivo}",
          "GET /api/tbejecutivoroles/model-se-ro/{idEjecutivo}/{idRol}",
          "POST /api/tbejecutivoroles",
          "POST /api/tbejecutivoroles/insertAndDeleteAllCustom",
          "POST /api/tbejecutivoroles/model-se-ro/findAllByIdEjecutivoList",
          "PUT /api/tbejecutivoroles"
        ]
      },
      {
        "name": "tb-empleado-controller",
        "endpoints": [
          "DELETE /api/tbempleados",
          "DELETE /api/tbempleados/deleteAll",
          "GET /api/tbempleados/model-se-ro/existById/{id}",
          "GET /api/tbempleados/model-se-ro/existByIdForEstado/{id}",
          "GET /api/tbempleados/model-se-ro/findAll",
          "GET /api/tbempleados/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbempleados/model-se-ro/findAllCustom",
          "GET /api/tbempleados/model-se-ro/findByCodigo/{codigo}",
          "GET /api/tbempleados/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbempleados/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbempleados/model-se-ro/findByIdTipoDocumentoAndNroDocumentoCustom/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbempleados/model-se-ro/{id}",
          "POST /api/tbempleados",
          "POST /api/tbempleados/insertList",
          "POST /api/tbempleados/insertLite",
          "POST /api/tbempleados/model-se-ro/findAllById",
          "POST /api/tbempleados/model-se-ro/findAllCustomByIdList",
          "POST /api/tbempleados/validateImport",
          "PUT /api/tbempleados"
        ]
      },
      {
        "name": "tb-persona-controller",
        "endpoints": [
          "DELETE /api/tbpersonas",
          "GET /api/tbpersonas/model-se-ro/existById/{id}",
          "GET /api/tbpersonas/model-se-ro/findAll",
          "GET /api/tbpersonas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/tbpersonas/model-se-ro/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbpersonas/model-se-ro/findByIdCustom/{id}",
          "GET /api/tbpersonas/model-se-ro/findByIdCustomExtend/{id}",
          "GET /api/tbpersonas/model-se-ro/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/tbpersonas/model-se-ro/findByNroDocumento/{nroDocumento}",
          "GET /api/tbpersonas/model-se-ro/{id}",
          "POST /api/tbpersonas",
          "POST /api/tbpersonas/insertList",
          "POST /api/tbpersonas/model-se-ro/findAllByIdList",
          "POST /api/tbpersonas/model-se-ro/findAllByIdListCustom",
          "POST /api/tbpersonas/model-se-ro/findAllByIdListCustomFullName",
          "POST /api/tbpersonas/model-se-ro/findAllByIdListCustomTbTipoDocumento",
          "POST /api/tbpersonas/model-se-ro/findAllByNroDocumentoIn",
          "PUT /api/tbpersonas"
        ]
      },
      {
        "name": "tb-persona-documento-emitido-controller",
        "endpoints": [
          "DELETE /api/tbpersonadocumentoemitidos",
          "DELETE /api/tbpersonadocumentoemitidos/deleteAll",
          "GET /api/tbpersonadocumentoemitidos/model-se-ro/findAll",
          "GET /api/tbpersonadocumentoemitidos/model-se-ro/findAllByIdPersonaAndIdCategoriaDocumentoEmitido/{idPersona}/{idCategoriaDocumentoEmitido}",
          "GET /api/tbpersonadocumentoemitidos/model-se-ro/findAllSciCategoriaDocumentoEmitidoByEstadoNgSelect/{estado}",
          "GET /api/tbpersonadocumentoemitidos/model-se-ro/{id}",
          "POST /api/tbpersonadocumentoemitidos",
          "POST /api/tbpersonadocumentoemitidos/insertList",
          "POST /api/tbpersonadocumentoemitidos/model-se-ro/findAllBySearch",
          "POST /api/tbpersonadocumentoemitidos/validateImportWithFile",
          "PUT /api/tbpersonadocumentoemitidos"
        ]
      }
    ]
  }
];
