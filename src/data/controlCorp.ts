import { SystemModule } from './types';

export const CONTROL_CORP_DATA: SystemModule[] = [
  {
    "module": "Control Corporativo",
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
        "name": "scc-acceso-controller",
        "endpoints": [
          "DELETE /api/sccaccesos",
          "GET /api/sccaccesos/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/sccaccesos/findAllByIdPerfilCustom/{idPerfil}",
          "GET /api/sccaccesos/findAllByIdPerfilForAcceso/{idPerfil}",
          "GET /api/sccaccesos/{sccPerfil}/{sccFormulario}/{sccAccion}",
          "POST /api/sccaccesos",
          "POST /api/sccaccesos/findAllByCodigoSistemaCustom",
          "POST /api/sccaccesos/insertAndDeleteAllCustom",
          "PUT /api/sccaccesos"
        ]
      },
      {
        "name": "scc-accion-controller",
        "endpoints": [
          "DELETE /api/sccacciones",
          "GET /api/sccacciones/findAll",
          "GET /api/sccacciones/findAllByEstado/{estado}",
          "GET /api/sccacciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/sccacciones/findByCodigo/{codigo}",
          "GET /api/sccacciones/{id}",
          "POST /api/sccacciones",
          "PUT /api/sccacciones"
        ]
      },
      {
        "name": "scc-formulario-accion-controller",
        "endpoints": [
          "DELETE /api/sccformularioacciones",
          "GET /api/sccformularioacciones/findAllByIdFormulario/{idFormulario}",
          "GET /api/sccformularioacciones/{sccFormulario}/{sccAccion}",
          "POST /api/sccformularioacciones",
          "POST /api/sccformularioacciones/findAllByIdFormularioList",
          "POST /api/sccformularioacciones/insertAndDeleteAllCustom",
          "PUT /api/sccformularioacciones"
        ]
      },
      {
        "name": "scc-formulario-controller",
        "endpoints": [
          "DELETE /api/sccformularios",
          "GET /api/sccformularios/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/sccformularios/findAllByIdSistema/{idSistema}",
          "GET /api/sccformularios/findByCodigo/{codigo}",
          "GET /api/sccformularios/{id}",
          "POST /api/sccformularios",
          "POST /api/sccformularios/findAllByIdSistemaList",
          "POST /api/sccformularios/findAllByIdSistemaListCustom",
          "PUT /api/sccformularios"
        ]
      },
      {
        "name": "scc-menu-controller",
        "endpoints": [
          "DELETE /api/sccmenus",
          "GET /api/sccmenus/findAllByCodigoSistemaAndIdMenuPadre/{codigoSistema}/{idMenuPadre}",
          "GET /api/sccmenus/{id}",
          "POST /api/sccmenus",
          "POST /api/sccmenus/findAllByCodigoSistemaAndIdFormularioList/{codigoSistema}",
          "PUT /api/sccmenus"
        ]
      },
      {
        "name": "scc-perfil-controller",
        "endpoints": [
          "DELETE /api/sccperfiles",
          "GET /api/sccperfiles/findAll",
          "GET /api/sccperfiles/findAllByEstado/{estado}",
          "GET /api/sccperfiles/findAllByEstadoNgSelect/{estado}",
          "GET /api/sccperfiles/{id}",
          "POST /api/sccperfiles",
          "PUT /api/sccperfiles"
        ]
      },
      {
        "name": "scc-persona-controller",
        "endpoints": [
          "DELETE /api/sccpersonas",
          "GET /api/sccpersonas/findByIdTipoDocumentoAndNroDocumento/{idTipoDocumento}/{nroDocumento}",
          "GET /api/sccpersonas/findByNroDocumento/{nroDocumento}",
          "GET /api/sccpersonas/findByUsuario/{usuario}",
          "GET /api/sccpersonas/{id}",
          "POST /api/sccpersonas",
          "PUT /api/sccpersonas"
        ]
      },
      {
        "name": "scc-sistema-controller",
        "endpoints": [
          "DELETE /api/sccsistemas",
          "GET /api/sccsistemas/findAll",
          "GET /api/sccsistemas/findAllByEstado/{estado}",
          "GET /api/sccsistemas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sccsistemas/findAllCustomForAcceso",
          "GET /api/sccsistemas/findByUsuarioCustom/{usuario}",
          "GET /api/sccsistemas/{id}",
          "POST /api/sccsistemas",
          "PUT /api/sccsistemas"
        ]
      },
      {
        "name": "scc-usuario-controller",
        "endpoints": [
          "DELETE /api/sccusuarios",
          "GET /api/sccusuarios/findAll",
          "GET /api/sccusuarios/findByUsuario/{usuario}",
          "GET /api/sccusuarios/{id}",
          "POST /api/sccusuarios",
          "POST /api/sccusuarios/insertWithPefilList",
          "POST /api/sccusuarios/updateWithPefilList",
          "PUT /api/sccusuarios"
        ]
      },
      {
        "name": "scc-usuario-perfil-controller",
        "endpoints": [
          "DELETE /api/sccusuarioperfiles",
          "GET /api/sccusuarioperfiles/findAllByIdUsuario/{idUsuario}",
          "GET /api/sccusuarioperfiles/findAllByIdUsuarioCustom/{idUsuario}",
          "GET /api/sccusuarioperfiles/{sccUsuario}/{sccPerfil}",
          "POST /api/sccusuarioperfiles",
          "POST /api/sccusuarioperfiles/insertAndDeleteAllCustom",
          "PUT /api/sccusuarioperfiles"
        ]
      }
    ]
  }
];
