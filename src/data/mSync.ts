import { SystemModule } from './types';

export const MSYNC_DATA: SystemModule[] = [
  {
    "module": "Maestros Sincronizados",
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
        "name": "sac-catalogo-listado-controller",
        "endpoints": [
          "DELETE /api/saccatalogolistados",
          "GET /api/saccatalogolistados/findAll",
          "GET /api/saccatalogolistados/findAllByCodigoSistemaAndCodigoTipoOperador/{codigoSistema}/{codigoTipoOperador}",
          "GET /api/saccatalogolistados/findAllByEstadoNgSelect/{estado}",
          "GET /api/saccatalogolistados/findAllByIdSistema/{idSistema}",
          "GET /api/saccatalogolistados/findAllByIdSistemaAndIdModoApliqueAndIdClaseEntidad/{idSistema}/{idModoAplique}/{idClaseEntidad}",
          "GET /api/saccatalogolistados/findAllByIdSistemaAndIdTipoOperador/{idSistema}/{idTipoOperador}",
          "GET /api/saccatalogolistados/findAllByIdTipoOperadorAndIdModoApliqueAndIdClaseEntidad/{idTipoOperador}/{idModoAplique}/{idClaseEntidad}",
          "GET /api/saccatalogolistados/findByCodigoAndCodigoSistemaAndCodigoTipoOperadorAndCodigoClaseEntidad/{codigo}/{codigoSistema}/{codigoTipoOperador}/{codigoClaseEntidad}",
          "GET /api/saccatalogolistados/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/saccatalogolistados/findCount",
          "GET /api/saccatalogolistados/{id}",
          "POST /api/saccatalogolistados",
          "POST /api/saccatalogolistados/findAllByIdList",
          "PUT /api/saccatalogolistados",
          "PUT /api/saccatalogolistados/updateAllForNroSecuencia"
        ]
      },
      {
        "name": "sac-clase-entidad-controller",
        "endpoints": [
          "DELETE /api/sacclaseentidades",
          "GET /api/sacclaseentidades/findAll",
          "GET /api/sacclaseentidades/findAllByEstado/{estado}",
          "GET /api/sacclaseentidades/findByCodigo/{codigo}",
          "GET /api/sacclaseentidades/{id}",
          "POST /api/sacclaseentidades",
          "POST /api/sacclaseentidades/findAllByIdList",
          "PUT /api/sacclaseentidades"
        ]
      },
      {
        "name": "sac-modo-aplique-controller",
        "endpoints": [
          "DELETE /api/sacmodoapliques",
          "GET /api/sacmodoapliques/findAll",
          "GET /api/sacmodoapliques/findAllByEstado/{estado}",
          "GET /api/sacmodoapliques/findAllByEstadoNgSelect/{estado}",
          "GET /api/sacmodoapliques/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sacmodoapliques/findCount",
          "GET /api/sacmodoapliques/{id}",
          "POST /api/sacmodoapliques",
          "POST /api/sacmodoapliques/findAllByIdList",
          "PUT /api/sacmodoapliques"
        ]
      },
      {
        "name": "sac-tipo-cobro-controller",
        "endpoints": [
          "DELETE /api/sactipocobros",
          "GET /api/sactipocobros/findAll",
          "GET /api/sactipocobros/findAllByEstado/{estado}",
          "GET /api/sactipocobros/findAllByEstadoNgSelect/{estado}",
          "GET /api/sactipocobros/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sactipocobros/findCount",
          "GET /api/sactipocobros/{id}",
          "POST /api/sactipocobros",
          "POST /api/sactipocobros/findAllByIdList",
          "PUT /api/sactipocobros"
        ]
      },
      {
        "name": "sac-tipo-estado-cotizacion-controller",
        "endpoints": [
          "DELETE /api/sactipoestadocotizaciones",
          "GET /api/sactipoestadocotizaciones/existById/{id}",
          "GET /api/sactipoestadocotizaciones/findAll",
          "GET /api/sactipoestadocotizaciones/findAllByEstado/{estado}",
          "GET /api/sactipoestadocotizaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/sactipoestadocotizaciones/findByCodigo/{codigo}",
          "GET /api/sactipoestadocotizaciones/{id}",
          "POST /api/sactipoestadocotizaciones",
          "POST /api/sactipoestadocotizaciones/findAllByIdList",
          "PUT /api/sactipoestadocotizaciones"
        ]
      },
      {
        "name": "sac-tipo-tarifa-controller",
        "endpoints": [
          "DELETE /api/sactipotarifas",
          "GET /api/sactipotarifas/findAll",
          "GET /api/sactipotarifas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sactipotarifas/findByCodigo/{codigo}",
          "GET /api/sactipotarifas/{id}",
          "POST /api/sactipotarifas",
          "POST /api/sactipotarifas/findAllByIdList",
          "PUT /api/sactipotarifas"
        ]
      },
      {
        "name": "sac-tipo-tarifa-sistema-controller",
        "endpoints": [
          "DELETE /api/sactipotarifasistemas",
          "GET /api/sactipotarifasistemas/findAllByIdTipoTarifa/{idTipoTarifario}",
          "GET /api/sactipotarifasistemas/{sacTipoTarifa}/{sciSistema}",
          "POST /api/sactipotarifasistemas",
          "POST /api/sactipotarifasistemas/insertAndDeleteAllCustom",
          "PUT /api/sactipotarifasistemas"
        ]
      },
      {
        "name": "sac-unidad-negocio-controller",
        "endpoints": [
          "DELETE /api/sacunidadnegocios",
          "GET /api/sacunidadnegocios/findAll",
          "GET /api/sacunidadnegocios/findAllByEstado/{estado}",
          "GET /api/sacunidadnegocios/findAllByIdClaseEntidad/{idClaseEntidad}",
          "GET /api/sacunidadnegocios/findByCodigo/{codigo}",
          "GET /api/sacunidadnegocios/{id}",
          "POST /api/sacunidadnegocios",
          "PUT /api/sacunidadnegocios"
        ]
      },
      {
        "name": "sac-unidad-tarifa-controller",
        "endpoints": [
          "DELETE /api/sacunidadtarifas",
          "GET /api/sacunidadtarifas/findAll",
          "GET /api/sacunidadtarifas/findAllByEstado/{estado}",
          "GET /api/sacunidadtarifas/findAllByIdTipoEnvioAndEstadoNgSelect/{idTipoEnvio}/{estado}",
          "GET /api/sacunidadtarifas/findByCodigo/{codigo}",
          "GET /api/sacunidadtarifas/{id}",
          "POST /api/sacunidadtarifas",
          "POST /api/sacunidadtarifas/findAllByCodigoList",
          "PUT /api/sacunidadtarifas"
        ]
      },
      {
        "name": "sac-unidad-tarifa-tipo-envio-controller",
        "endpoints": [
          "DELETE /api/sacunidadtarifatipoenvios",
          "GET /api/sacunidadtarifatipoenvios/findAllByIdUnidadTarifa/{idUnidadTarifa}",
          "GET /api/sacunidadtarifatipoenvios/{sacUnidadTarifa}/{tbTipoEnvio}",
          "POST /api/sacunidadtarifatipoenvios",
          "POST /api/sacunidadtarifatipoenvios/insertAndDeleteAllCustom",
          "PUT /api/sacunidadtarifatipoenvios"
        ]
      },
      {
        "name": "sac-unidad-tarifa-tipo-movimiento-contenedor-controller",
        "endpoints": [
          "DELETE /api/sacunidadtarifatipomovimientocontenedores",
          "GET /api/sacunidadtarifatipomovimientocontenedores/findAllByIdUnidadTarifa/{idUnidadTarifa}",
          "GET /api/sacunidadtarifatipomovimientocontenedores/{sacUnidadTarifaIdUnidadTarifa}/{tbTipoMovimientoContenedorIdTipoMovimientoContenedor}",
          "POST /api/sacunidadtarifatipomovimientocontenedores",
          "POST /api/sacunidadtarifatipomovimientocontenedores/insertAndDeleteAllCustom",
          "PUT /api/sacunidadtarifatipomovimientocontenedores"
        ]
      },
      {
        "name": "sad-campo-aduana-controller",
        "endpoints": [
          "DELETE /api/sadcampoaduanas",
          "GET /api/sadcampoaduanas/findAll",
          "GET /api/sadcampoaduanas/{id}",
          "POST /api/sadcampoaduanas",
          "POST /api/sadcampoaduanas/findAllByIdList",
          "PUT /api/sadcampoaduanas"
        ]
      },
      {
        "name": "sad-campo-aduana-tipo-regimen-aduanero-controller",
        "endpoints": [
          "DELETE /api/sadcampoaduanatiporegimenaduaneros",
          "GET /api/sadcampoaduanatiporegimenaduaneros/findAllIdByIdCampoAduana/{idCampoAduana}",
          "GET /api/sadcampoaduanatiporegimenaduaneros/{sadCampoAduana}/{tbTipoRegimenAduanero}",
          "POST /api/sadcampoaduanatiporegimenaduaneros",
          "POST /api/sadcampoaduanatiporegimenaduaneros/insertAndDeleteAllCustom",
          "PUT /api/sadcampoaduanatiporegimenaduaneros"
        ]
      },
      {
        "name": "sad-canal-control-controller",
        "endpoints": [
          "DELETE /api/sadcanalcontroles",
          "GET /api/sadcanalcontroles/findAll",
          "GET /api/sadcanalcontroles/findByCodigo/{codigo}",
          "GET /api/sadcanalcontroles/{id}",
          "POST /api/sadcanalcontroles",
          "POST /api/sadcanalcontroles/findAllByIdList",
          "PUT /api/sadcanalcontroles"
        ]
      },
      {
        "name": "sad-carga-embarque-indicador-controller",
        "endpoints": [
          "DELETE /api/sadcargaembarqueindicadores",
          "GET /api/sadcargaembarqueindicadores/findAll",
          "GET /api/sadcargaembarqueindicadores/findAllByEstado/{estado}",
          "GET /api/sadcargaembarqueindicadores/{id}",
          "POST /api/sadcargaembarqueindicadores",
          "POST /api/sadcargaembarqueindicadores/findAllByCodigoList",
          "POST /api/sadcargaembarqueindicadores/findAllByIdList",
          "PUT /api/sadcargaembarqueindicadores"
        ]
      },
      {
        "name": "sad-catalogo-concentrado-mineral-controller",
        "endpoints": [
          "DELETE /api/sadcatalogoconcentradominerales",
          "GET /api/sadcatalogoconcentradominerales/findAll",
          "GET /api/sadcatalogoconcentradominerales/findAllByCtrlRegularizacion/{ctrlRegularizacion}",
          "GET /api/sadcatalogoconcentradominerales/findByCodigo/{codigo}",
          "GET /api/sadcatalogoconcentradominerales/findByCodigoAndCtrlRegularizacion/{codigo}/{ctrlRegularizacion}",
          "GET /api/sadcatalogoconcentradominerales/{id}",
          "POST /api/sadcatalogoconcentradominerales",
          "POST /api/sadcatalogoconcentradominerales/findAllByIdList",
          "PUT /api/sadcatalogoconcentradominerales"
        ]
      },
      {
        "name": "sad-catalogo-operativo-regimen-aduanero-reemplazo-controller",
        "endpoints": [
          "DELETE /api/sadcatalogooperativoregimenaduaneroreemplazos",
          "GET /api/sadcatalogooperativoregimenaduaneroreemplazos/findAll",
          "GET /api/sadcatalogooperativoregimenaduaneroreemplazos/findAllByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/sadcatalogooperativoregimenaduaneroreemplazos/findAllByIdRegimenAduaneroAndEstado/{idRegimenAduanero}/{estado}",
          "GET /api/sadcatalogooperativoregimenaduaneroreemplazos/{id}",
          "POST /api/sadcatalogooperativoregimenaduaneroreemplazos",
          "PUT /api/sadcatalogooperativoregimenaduaneroreemplazos"
        ]
      },
      {
        "name": "sad-clasificacion-socorro-controller",
        "endpoints": [
          "DELETE /api/sadclasificacionsocorros",
          "GET /api/sadclasificacionsocorros/findAllByEstado/{estado}",
          "GET /api/sadclasificacionsocorros/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadclasificacionsocorros/{id}",
          "POST /api/sadclasificacionsocorros",
          "POST /api/sadclasificacionsocorros/findAllByIdList",
          "PUT /api/sadclasificacionsocorros"
        ]
      },
      {
        "name": "sad-clasificacion-urgente-controller",
        "endpoints": [
          "DELETE /api/sadclasificacionurgentes",
          "GET /api/sadclasificacionurgentes/findAllByEstado/{estado}",
          "GET /api/sadclasificacionurgentes/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadclasificacionurgentes/{id}",
          "POST /api/sadclasificacionurgentes",
          "POST /api/sadclasificacionurgentes/findAllByIdList",
          "PUT /api/sadclasificacionurgentes"
        ]
      },
      {
        "name": "sad-condicion-entidad-controller",
        "endpoints": [
          "DELETE /api/sadcondicionentidades",
          "GET /api/sadcondicionentidades/findAll",
          "GET /api/sadcondicionentidades/findAllByEstado/{estado}",
          "GET /api/sadcondicionentidades/{id}",
          "POST /api/sadcondicionentidades",
          "POST /api/sadcondicionentidades/findAllByCodigoList",
          "POST /api/sadcondicionentidades/findAllByIdList",
          "PUT /api/sadcondicionentidades"
        ]
      },
      {
        "name": "sad-condicion-transaccion-controller",
        "endpoints": [
          "DELETE /api/sadcondiciontransacciones",
          "GET /api/sadcondiciontransacciones/findAll",
          "GET /api/sadcondiciontransacciones/findAllByEstado/{estado}",
          "GET /api/sadcondiciontransacciones/{id}",
          "POST /api/sadcondiciontransacciones",
          "POST /api/sadcondiciontransacciones/findAllByIdList",
          "PUT /api/sadcondiciontransacciones"
        ]
      },
      {
        "name": "sad-criterio-origen-controller",
        "endpoints": [
          "GET /api/sadcriterioorigenes/findAll",
          "GET /api/sadcriterioorigenes/findAllByEstado/{estado}",
          "GET /api/sadcriterioorigenes/findByCodigo/{codigo}",
          "GET /api/sadcriterioorigenes/{id}",
          "POST /api/sadcriterioorigenes/findAllByCodigoList",
          "POST /api/sadcriterioorigenes/findAllByIdList"
        ]
      },
      {
        "name": "sad-determinacion-valor-controller",
        "endpoints": [
          "DELETE /api/saddeterminacionvalores",
          "GET /api/saddeterminacionvalores/findAll",
          "GET /api/saddeterminacionvalores/findAllByEstado/{estado}",
          "GET /api/saddeterminacionvalores/findByCodigo/{codigo}",
          "GET /api/saddeterminacionvalores/{id}",
          "POST /api/saddeterminacionvalores",
          "POST /api/saddeterminacionvalores/findAllByIdList",
          "POST /api/saddeterminacionvalores/findByCodigoList",
          "PUT /api/saddeterminacionvalores"
        ]
      },
      {
        "name": "sad-elemento-concentrado-mineral-controller",
        "endpoints": [
          "DELETE /api/sadelementoconcentradominerales",
          "GET /api/sadelementoconcentradominerales/findAll",
          "GET /api/sadelementoconcentradominerales/findAllByEstado/{estado}",
          "GET /api/sadelementoconcentradominerales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadelementoconcentradominerales/{id}",
          "POST /api/sadelementoconcentradominerales",
          "POST /api/sadelementoconcentradominerales/findAllByIdList",
          "PUT /api/sadelementoconcentradominerales"
        ]
      },
      {
        "name": "sad-entidad-autorizante-controller",
        "endpoints": [
          "DELETE /api/sadentidadautorizantes",
          "GET /api/sadentidadautorizantes/findAll",
          "GET /api/sadentidadautorizantes/findAllByEstado/{estado}",
          "GET /api/sadentidadautorizantes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadentidadautorizantes/{id}",
          "POST /api/sadentidadautorizantes",
          "POST /api/sadentidadautorizantes/findAllByCodigoList",
          "POST /api/sadentidadautorizantes/findAllByIdList",
          "PUT /api/sadentidadautorizantes"
        ]
      },
      {
        "name": "sad-entidad-autorizante-subentidad-autorizante-controller",
        "endpoints": [
          "DELETE /api/sadentidadautorizantesubentidadautorizantes",
          "GET /api/sadentidadautorizantesubentidadautorizantes/findAll",
          "GET /api/sadentidadautorizantesubentidadautorizantes/findAllByIdEntidadAutorizante/{idEntidadAutorizante}",
          "GET /api/sadentidadautorizantesubentidadautorizantes/{sadEntidadAutorizante}/{sadSubentidadAutorizante}",
          "POST /api/sadentidadautorizantesubentidadautorizantes",
          "POST /api/sadentidadautorizantesubentidadautorizantes/insertAndDeleteAllCustom",
          "PUT /api/sadentidadautorizantesubentidadautorizantes"
        ]
      },
      {
        "name": "sad-evento-asociado-plazo-controller",
        "endpoints": [
          "DELETE /api/sadeventoasociadoplazos",
          "GET /api/sadeventoasociadoplazos/findAll",
          "GET /api/sadeventoasociadoplazos/findAllByEstado/{estado}",
          "GET /api/sadeventoasociadoplazos/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadeventoasociadoplazos/findByCodigo/{codigo}",
          "GET /api/sadeventoasociadoplazos/{id}",
          "POST /api/sadeventoasociadoplazos",
          "POST /api/sadeventoasociadoplazos/findAllByCodigoList",
          "POST /api/sadeventoasociadoplazos/findAllByIdList",
          "PUT /api/sadeventoasociadoplazos"
        ]
      },
      {
        "name": "sad-forma-pago-controller",
        "endpoints": [
          "DELETE /api/sadformapagos",
          "GET /api/sadformapagos/findAll",
          "GET /api/sadformapagos/findAllByEstado/{estado}",
          "GET /api/sadformapagos/{id}",
          "POST /api/sadformapagos",
          "POST /api/sadformapagos/findAllByCodigoList",
          "POST /api/sadformapagos/findAllByIdList",
          "PUT /api/sadformapagos"
        ]
      },
      {
        "name": "sad-forma-traslado-concentrado-mineral-controller",
        "endpoints": [
          "DELETE /api/sadformatrasladoconcentradominerales",
          "GET /api/sadformatrasladoconcentradominerales/findAll",
          "GET /api/sadformatrasladoconcentradominerales/findAllByEstado/{estado}",
          "GET /api/sadformatrasladoconcentradominerales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadformatrasladoconcentradominerales/{id}",
          "POST /api/sadformatrasladoconcentradominerales",
          "POST /api/sadformatrasladoconcentradominerales/findAllByIdList",
          "PUT /api/sadformatrasladoconcentradominerales"
        ]
      },
      {
        "name": "sad-grupo-determinacion-valor-controller",
        "endpoints": [
          "DELETE /api/sadgrupodeterminacionvalores",
          "GET /api/sadgrupodeterminacionvalores/findAll",
          "GET /api/sadgrupodeterminacionvalores/findAllByEstado/{estado}",
          "GET /api/sadgrupodeterminacionvalores/{id}",
          "POST /api/sadgrupodeterminacionvalores",
          "PUT /api/sadgrupodeterminacionvalores"
        ]
      },
      {
        "name": "sad-identificador-software-controller",
        "endpoints": [
          "DELETE /api/sadidentificadorsoftwares",
          "GET /api/sadidentificadorsoftwares/findAll",
          "GET /api/sadidentificadorsoftwares/findAllByEstado/{estado}",
          "GET /api/sadidentificadorsoftwares/{id}",
          "POST /api/sadidentificadorsoftwares",
          "POST /api/sadidentificadorsoftwares/findAllByIdList",
          "PUT /api/sadidentificadorsoftwares"
        ]
      },
      {
        "name": "sad-indicador-controller",
        "endpoints": [
          "DELETE /api/sadindicadores",
          "GET /api/sadindicadores/findAll",
          "GET /api/sadindicadores/findAllByEstado/{estado}",
          "GET /api/sadindicadores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadindicadores/{id}",
          "POST /api/sadindicadores",
          "POST /api/sadindicadores/findAllByCodigoList",
          "POST /api/sadindicadores/findAllByIdList",
          "PUT /api/sadindicadores"
        ]
      },
      {
        "name": "sad-indicador-deduccion-distinguida-controller",
        "endpoints": [
          "DELETE /api/sadindicadordeducciondistinguidas",
          "GET /api/sadindicadordeducciondistinguidas/findAll",
          "GET /api/sadindicadordeducciondistinguidas/findAllByEstado/{estado}",
          "GET /api/sadindicadordeducciondistinguidas/{id}",
          "POST /api/sadindicadordeducciondistinguidas",
          "POST /api/sadindicadordeducciondistinguidas/findAllByIdList",
          "PUT /api/sadindicadordeducciondistinguidas"
        ]
      },
      {
        "name": "sad-indicador-despacho-controller",
        "endpoints": [
          "DELETE /api/sadindicadordespachos",
          "GET /api/sadindicadordespachos/findAll",
          "GET /api/sadindicadordespachos/findAllByEstado/{estado}",
          "GET /api/sadindicadordespachos/{id}",
          "POST /api/sadindicadordespachos",
          "POST /api/sadindicadordespachos/findAllByIdList",
          "PUT /api/sadindicadordespachos"
        ]
      },
      {
        "name": "sad-indicador-tipo-valor-controller",
        "endpoints": [
          "DELETE /api/sadindicadortipovalores",
          "GET /api/sadindicadortipovalores/findAll",
          "GET /api/sadindicadortipovalores/findAllByEstado/{estado}",
          "GET /api/sadindicadortipovalores/{id}",
          "POST /api/sadindicadortipovalores",
          "POST /api/sadindicadortipovalores/findAllByIdList",
          "PUT /api/sadindicadortipovalores"
        ]
      },
      {
        "name": "sad-indicador-transito-transbordo-controller",
        "endpoints": [
          "GET /api/sadindicadortransitotransbordos/findAll",
          "GET /api/sadindicadortransitotransbordos/findAllByEstado/{estado}",
          "GET /api/sadindicadortransitotransbordos/findByCodigo/{codigo}",
          "GET /api/sadindicadortransitotransbordos/{id}",
          "POST /api/sadindicadortransitotransbordos/findAllByCodigoList",
          "POST /api/sadindicadortransitotransbordos/findAllByIdList"
        ]
      },
      {
        "name": "sad-material-inferior-util-controller",
        "endpoints": [
          "DELETE /api/sadmaterialinferiorutiles",
          "GET /api/sadmaterialinferiorutiles/findAllByEstado/{estado}",
          "GET /api/sadmaterialinferiorutiles/{id}",
          "POST /api/sadmaterialinferiorutiles",
          "POST /api/sadmaterialinferiorutiles/findAllByCodigoList",
          "POST /api/sadmaterialinferiorutiles/findAllByIdList",
          "PUT /api/sadmaterialinferiorutiles"
        ]
      },
      {
        "name": "sad-naturaleza-transaccion-comercial-controller",
        "endpoints": [
          "DELETE /api/sadnaturalezatransaccioncomerciales",
          "GET /api/sadnaturalezatransaccioncomerciales/findAll",
          "GET /api/sadnaturalezatransaccioncomerciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadnaturalezatransaccioncomerciales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadnaturalezatransaccioncomerciales/{id}",
          "POST /api/sadnaturalezatransaccioncomerciales",
          "POST /api/sadnaturalezatransaccioncomerciales/findAllByCodigoList",
          "POST /api/sadnaturalezatransaccioncomerciales/findAllByIdList",
          "PUT /api/sadnaturalezatransaccioncomerciales"
        ]
      },
      {
        "name": "sad-prorrateo-controller",
        "endpoints": [
          "DELETE /api/sadprorrateos",
          "GET /api/sadprorrateos/findAll",
          "GET /api/sadprorrateos/findAllByEstado/{estado}",
          "GET /api/sadprorrateos/findByCodigo/{codigo}",
          "GET /api/sadprorrateos/{id}",
          "POST /api/sadprorrateos",
          "POST /api/sadprorrateos/findAllByCodigoList",
          "POST /api/sadprorrateos/findAllByIdList",
          "PUT /api/sadprorrateos"
        ]
      },
      {
        "name": "sad-prorrateo-tipo-regimen-aduanero-controller",
        "endpoints": [
          "DELETE /api/sadprorrateotiporegimenaduaneros",
          "GET /api/sadprorrateotiporegimenaduaneros/findAll",
          "GET /api/sadprorrateotiporegimenaduaneros/findAllIdByIdProrrateo/{idProrrateo}",
          "GET /api/sadprorrateotiporegimenaduaneros/{sadProrrateo}/{tbTipoRegimenAduanero}",
          "POST /api/sadprorrateotiporegimenaduaneros",
          "POST /api/sadprorrateotiporegimenaduaneros/insertAndDeleteAllCustom",
          "PUT /api/sadprorrateotiporegimenaduaneros"
        ]
      },
      {
        "name": "sad-region-controller",
        "endpoints": [
          "DELETE /api/sadregiones",
          "GET /api/sadregiones/findAll",
          "GET /api/sadregiones/findAllByEstado/{estado}",
          "GET /api/sadregiones/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadregiones/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadregiones/{id}",
          "POST /api/sadregiones",
          "POST /api/sadregiones/findAllByCodigoList",
          "POST /api/sadregiones/findAllByIdList",
          "PUT /api/sadregiones"
        ]
      },
      {
        "name": "sad-subentidad-autorizante-controller",
        "endpoints": [
          "DELETE /api/sadsubentidadautorizantes",
          "GET /api/sadsubentidadautorizantes/findAll",
          "GET /api/sadsubentidadautorizantes/findAllByEstado/{estado}",
          "GET /api/sadsubentidadautorizantes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadsubentidadautorizantes/{id}",
          "POST /api/sadsubentidadautorizantes",
          "POST /api/sadsubentidadautorizantes/findAllByCodigoList",
          "POST /api/sadsubentidadautorizantes/findAllByIdList",
          "PUT /api/sadsubentidadautorizantes"
        ]
      },
      {
        "name": "sad-subentidad-autorizante-tipo-documento-asociado-controller",
        "endpoints": [
          "DELETE /api/sadsubentidadautorizantetipodocumentoasociados",
          "GET /api/sadsubentidadautorizantetipodocumentoasociados/findAll",
          "GET /api/sadsubentidadautorizantetipodocumentoasociados/findAllIdByIdSubentidadAutorizante/{idSubentidadAutorizante}",
          "GET /api/sadsubentidadautorizantetipodocumentoasociados/{sadSubentidadAutorizante}/{sadTipoDocumentoAsociado}",
          "POST /api/sadsubentidadautorizantetipodocumentoasociados",
          "POST /api/sadsubentidadautorizantetipodocumentoasociados/findAllByIdList",
          "POST /api/sadsubentidadautorizantetipodocumentoasociados/insertAndDeleteAllCustom",
          "PUT /api/sadsubentidadautorizantetipodocumentoasociados"
        ]
      },
      {
        "name": "sad-subtipo-documento-asociado-controller",
        "endpoints": [
          "DELETE /api/sadsubtipodocumentoasociados",
          "GET /api/sadsubtipodocumentoasociados/findAll",
          "GET /api/sadsubtipodocumentoasociados/findAllByEstado/{estado}",
          "GET /api/sadsubtipodocumentoasociados/{id}",
          "POST /api/sadsubtipodocumentoasociados",
          "POST /api/sadsubtipodocumentoasociados/findAllByCodigoList",
          "POST /api/sadsubtipodocumentoasociados/findAllByIdList",
          "PUT /api/sadsubtipodocumentoasociados"
        ]
      },
      {
        "name": "sad-tipo-calculo-flete-controller",
        "endpoints": [
          "DELETE /api/sadtipocalculofletes",
          "GET /api/sadtipocalculofletes/findAll",
          "GET /api/sadtipocalculofletes/findAllByEstado/{estado}",
          "GET /api/sadtipocalculofletes/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadtipocalculofletes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipocalculofletes/{id}",
          "POST /api/sadtipocalculofletes",
          "POST /api/sadtipocalculofletes/findAllByCodigoList",
          "POST /api/sadtipocalculofletes/findAllByIdList",
          "PUT /api/sadtipocalculofletes"
        ]
      },
      {
        "name": "sad-tipo-certificado-origen-controller",
        "endpoints": [
          "GET /api/sadtipocertificadoorigenes/findAll",
          "GET /api/sadtipocertificadoorigenes/findAllByEstado/{estado}",
          "GET /api/sadtipocertificadoorigenes/findByCodigo/{codigo}",
          "GET /api/sadtipocertificadoorigenes/{id}",
          "POST /api/sadtipocertificadoorigenes/findAllByCodigoList",
          "POST /api/sadtipocertificadoorigenes/findAllByIdList"
        ]
      },
      {
        "name": "sad-tipo-concentrado-mineral-controller",
        "endpoints": [
          "DELETE /api/sadtipoconcentradominerales",
          "GET /api/sadtipoconcentradominerales/findAll",
          "GET /api/sadtipoconcentradominerales/findAllByEstado/{estado}",
          "GET /api/sadtipoconcentradominerales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipoconcentradominerales/{id}",
          "POST /api/sadtipoconcentradominerales",
          "POST /api/sadtipoconcentradominerales/findAllByIdList",
          "PUT /api/sadtipoconcentradominerales"
        ]
      },
      {
        "name": "sad-tipo-descripcion-minima-controller",
        "endpoints": [
          "DELETE /api/sadtipodescripcionminimas",
          "GET /api/sadtipodescripcionminimas/findAll",
          "GET /api/sadtipodescripcionminimas/findAllByEstado/{estado}",
          "GET /api/sadtipodescripcionminimas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipodescripcionminimas/findCount",
          "GET /api/sadtipodescripcionminimas/{id}",
          "POST /api/sadtipodescripcionminimas",
          "POST /api/sadtipodescripcionminimas/findAllByIdList",
          "PUT /api/sadtipodescripcionminimas"
        ]
      },
      {
        "name": "sad-tipo-documento-asociado-controller",
        "endpoints": [
          "DELETE /api/sadtipodocumentoasociados",
          "GET /api/sadtipodocumentoasociados/findAll",
          "GET /api/sadtipodocumentoasociados/findAllByEstado/{estado}",
          "GET /api/sadtipodocumentoasociados/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipodocumentoasociados/{id}",
          "POST /api/sadtipodocumentoasociados",
          "POST /api/sadtipodocumentoasociados/findAllByCodigoList",
          "POST /api/sadtipodocumentoasociados/findAllByIdList",
          "PUT /api/sadtipodocumentoasociados"
        ]
      },
      {
        "name": "sad-tipo-documento-comercial-controller",
        "endpoints": [
          "DELETE /api/sadtipodocumentocomerciales",
          "GET /api/sadtipodocumentocomerciales/findAll",
          "GET /api/sadtipodocumentocomerciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadtipodocumentocomerciales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipodocumentocomerciales/{id}",
          "POST /api/sadtipodocumentocomerciales",
          "POST /api/sadtipodocumentocomerciales/findAllByCodigoList",
          "POST /api/sadtipodocumentocomerciales/findAllByIdList",
          "PUT /api/sadtipodocumentocomerciales"
        ]
      },
      {
        "name": "sad-tipo-documento-transporte-controller",
        "endpoints": [
          "DELETE /api/sadtipodocumentotransportes",
          "GET /api/sadtipodocumentotransportes/findAll",
          "GET /api/sadtipodocumentotransportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadtipodocumentotransportes/{id}",
          "POST /api/sadtipodocumentotransportes",
          "POST /api/sadtipodocumentotransportes/findAllByCodigoList",
          "POST /api/sadtipodocumentotransportes/findAllByIdList",
          "PUT /api/sadtipodocumentotransportes"
        ]
      },
      {
        "name": "sad-tipo-emisor-certificado-origen-controller",
        "endpoints": [
          "GET /api/sadtipoemisorcertificadoorigenes/findAll",
          "GET /api/sadtipoemisorcertificadoorigenes/findAllByEstado/{estado}",
          "GET /api/sadtipoemisorcertificadoorigenes/findByCodigo/{codigo}",
          "GET /api/sadtipoemisorcertificadoorigenes/{id}",
          "POST /api/sadtipoemisorcertificadoorigenes/findAllByCodigoList",
          "POST /api/sadtipoemisorcertificadoorigenes/findAllByIdList"
        ]
      },
      {
        "name": "sad-tipo-endose-controller",
        "endpoints": [
          "DELETE /api/sadtipoendoses",
          "GET /api/sadtipoendoses/findAll",
          "GET /api/sadtipoendoses/findAllByEstado/{estado}",
          "GET /api/sadtipoendoses/findByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/sadtipoendoses/{id}",
          "POST /api/sadtipoendoses",
          "POST /api/sadtipoendoses/findAllByCodigoList",
          "POST /api/sadtipoendoses/findAllByCodigoListAndCodigoRegimenAduanero/{codigoRegimenAduanero}",
          "POST /api/sadtipoendoses/findAllByIdList",
          "PUT /api/sadtipoendoses"
        ]
      },
      {
        "name": "sad-tipo-estado-carga-embarque-controller",
        "endpoints": [
          "DELETE /api/sadtipoestadocargaembarques",
          "GET /api/sadtipoestadocargaembarques/findAll",
          "GET /api/sadtipoestadocargaembarques/findAllByEstado/{estado}",
          "GET /api/sadtipoestadocargaembarques/findByCodigo/{codigo}",
          "GET /api/sadtipoestadocargaembarques/{id}",
          "POST /api/sadtipoestadocargaembarques",
          "POST /api/sadtipoestadocargaembarques/findAllByIdList",
          "PUT /api/sadtipoestadocargaembarques"
        ]
      },
      {
        "name": "sad-tipo-estado-carga-ingreso-controller",
        "endpoints": [
          "DELETE /api/sadtipoestadocargaingresos",
          "GET /api/sadtipoestadocargaingresos/findAll",
          "GET /api/sadtipoestadocargaingresos/findAllByEstado/{estado}",
          "GET /api/sadtipoestadocargaingresos/findByCodigo/{codigo}",
          "GET /api/sadtipoestadocargaingresos/{id}",
          "POST /api/sadtipoestadocargaingresos",
          "POST /api/sadtipoestadocargaingresos/findAllByIdList",
          "PUT /api/sadtipoestadocargaingresos"
        ]
      },
      {
        "name": "sad-tipo-estado-orden-aduana-controller",
        "endpoints": [
          "DELETE /api/sadtipoestadoordenaduanas",
          "GET /api/sadtipoestadoordenaduanas/findAll",
          "GET /api/sadtipoestadoordenaduanas/findAllByTipoRegimenAndEstado/{idTipoRegimen}/{estado}",
          "GET /api/sadtipoestadoordenaduanas/findByCodigoAndCodigoTipoRegimenAduaneroAndEstado/{codigo}/{codigoTipoRegimenAduanero}/{estado}",
          "GET /api/sadtipoestadoordenaduanas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipoestadoordenaduanas/findByCodigoAndIdTipoRegimenAduaneroAndEstado/{codigo}/{idTipoRegimenAduanero}/{estado}",
          "GET /api/sadtipoestadoordenaduanas/{id}",
          "POST /api/sadtipoestadoordenaduanas",
          "POST /api/sadtipoestadoordenaduanas/findAllByIdList",
          "PUT /api/sadtipoestadoordenaduanas"
        ]
      },
      {
        "name": "sad-tipo-lugar-descarga-controller",
        "endpoints": [
          "DELETE /api/sadtipolugardescargas",
          "GET /api/sadtipolugardescargas/findAll",
          "GET /api/sadtipolugardescargas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadtipolugardescargas/{id}",
          "POST /api/sadtipolugardescargas",
          "POST /api/sadtipolugardescargas/findAllByIdList",
          "PUT /api/sadtipolugardescargas"
        ]
      },
      {
        "name": "sad-tipo-operacion-comprobante-pago-controller",
        "endpoints": [
          "DELETE /api/sadtipooperacioncomprobantepagos",
          "GET /api/sadtipooperacioncomprobantepagos/findAll",
          "GET /api/sadtipooperacioncomprobantepagos/findAllByEstado/{estado}",
          "GET /api/sadtipooperacioncomprobantepagos/{id}",
          "POST /api/sadtipooperacioncomprobantepagos",
          "POST /api/sadtipooperacioncomprobantepagos/findAllByIdList",
          "PUT /api/sadtipooperacioncomprobantepagos"
        ]
      },
      {
        "name": "sad-tipo-operacion-controller",
        "endpoints": [
          "DELETE /api/sadtipooperaciones",
          "GET /api/sadtipooperaciones/findAll",
          "GET /api/sadtipooperaciones/findAllByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/sadtipooperaciones/{id}",
          "POST /api/sadtipooperaciones",
          "PUT /api/sadtipooperaciones"
        ]
      },
      {
        "name": "sad-tipo-pago-electronico-controller",
        "endpoints": [
          "DELETE /api/sadtipopagoelectronicos",
          "GET /api/sadtipopagoelectronicos/findAll",
          "GET /api/sadtipopagoelectronicos/findAllByEstado/{estado}",
          "GET /api/sadtipopagoelectronicos/findByCodigo/{codigo}",
          "GET /api/sadtipopagoelectronicos/{id}",
          "POST /api/sadtipopagoelectronicos",
          "POST /api/sadtipopagoelectronicos/findAllByCodigoList",
          "POST /api/sadtipopagoelectronicos/findAllByIdList",
          "PUT /api/sadtipopagoelectronicos"
        ]
      },
      {
        "name": "sad-tipo-proceso-documento-asociado-controller",
        "endpoints": [
          "DELETE /api/sadtipoprocesodocumentoasociados",
          "GET /api/sadtipoprocesodocumentoasociados/findAll",
          "GET /api/sadtipoprocesodocumentoasociados/findAllByCtrlCabeceraSerieAndEstado/{ctrlCabeceraSerie}/{estado}",
          "GET /api/sadtipoprocesodocumentoasociados/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadtipoprocesodocumentoasociados/{id}",
          "POST /api/sadtipoprocesodocumentoasociados",
          "POST /api/sadtipoprocesodocumentoasociados/findAllByCodigoList",
          "POST /api/sadtipoprocesodocumentoasociados/findAllByIdList",
          "PUT /api/sadtipoprocesodocumentoasociados"
        ]
      },
      {
        "name": "sad-tipo-punto-llegada-controller",
        "endpoints": [
          "DELETE /api/sadtipopuntollegadas",
          "GET /api/sadtipopuntollegadas/findAll",
          "GET /api/sadtipopuntollegadas/findAllByEstado/{estado}",
          "GET /api/sadtipopuntollegadas/findByCodigo/{codigo}",
          "GET /api/sadtipopuntollegadas/{id}",
          "POST /api/sadtipopuntollegadas",
          "POST /api/sadtipopuntollegadas/findAllByCodigoList",
          "POST /api/sadtipopuntollegadas/findAllByIdList",
          "PUT /api/sadtipopuntollegadas"
        ]
      },
      {
        "name": "sad-tipo-seguro-controller",
        "endpoints": [
          "DELETE /api/sadtiposeguros",
          "GET /api/sadtiposeguros/findAll",
          "GET /api/sadtiposeguros/findAllByEstadoNgSelect/{estado}",
          "GET /api/sadtiposeguros/findByCodigo/{codigo}",
          "GET /api/sadtiposeguros/{id}",
          "POST /api/sadtiposeguros",
          "POST /api/sadtiposeguros/findAllByCodigoList",
          "POST /api/sadtiposeguros/findAllByIdList",
          "PUT /api/sadtiposeguros"
        ]
      },
      {
        "name": "sad-tipo-tratamiento-mercancia-controller",
        "endpoints": [
          "DELETE /api/sadtipotratamientomercancias",
          "GET /api/sadtipotratamientomercancias/findAll",
          "GET /api/sadtipotratamientomercancias/findAllByEstado/{estado}",
          "GET /api/sadtipotratamientomercancias/findByCodigo/{codigo}",
          "GET /api/sadtipotratamientomercancias/{id}",
          "POST /api/sadtipotratamientomercancias",
          "PUT /api/sadtipotratamientomercancias"
        ]
      },
      {
        "name": "sad-tipo-unidad-carga-controller",
        "endpoints": [
          "DELETE /api/sadtipounidadcargas",
          "GET /api/sadtipounidadcargas/findAll",
          "GET /api/sadtipounidadcargas/findAllByEstado/{estado}",
          "GET /api/sadtipounidadcargas/findByCodigo/{codigo}",
          "GET /api/sadtipounidadcargas/{id}",
          "POST /api/sadtipounidadcargas",
          "POST /api/sadtipounidadcargas/findAllByCodigoList",
          "POST /api/sadtipounidadcargas/findAllByIdList",
          "PUT /api/sadtipounidadcargas"
        ]
      },
      {
        "name": "sad-tributo-controller",
        "endpoints": [
          "DELETE /api/sadtributos",
          "GET /api/sadtributos/findAll",
          "GET /api/sadtributos/findAllByEstado/{estado}",
          "GET /api/sadtributos/findByCodigo/{codigo}",
          "GET /api/sadtributos/{id}",
          "POST /api/sadtributos",
          "POST /api/sadtributos/findAllByCodigoList",
          "POST /api/sadtributos/findAllByIdList",
          "PUT /api/sadtributos"
        ]
      },
      {
        "name": "sad-ultractividad-controller",
        "endpoints": [
          "DELETE /api/sadultractividades",
          "GET /api/sadultractividades/findAllByEstado/{estado}",
          "GET /api/sadultractividades/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sadultractividades/{id}",
          "POST /api/sadultractividades",
          "POST /api/sadultractividades/findAllByCodigoList",
          "POST /api/sadultractividades/findAllByIdList",
          "PUT /api/sadultractividades"
        ]
      },
      {
        "name": "sba-anticipo-controller",
        "endpoints": [
          "DELETE /api/sbaanticipos",
          "GET /api/sbaanticipos/{id}",
          "POST /api/sbaanticipos",
          "PUT /api/sbaanticipos"
        ]
      },
      {
        "name": "sba-anticipo-detalle-controller",
        "endpoints": [
          "DELETE /api/sbaanticipodetalles",
          "GET /api/sbaanticipodetalles/{id}",
          "POST /api/sbaanticipodetalles",
          "PUT /api/sbaanticipodetalles"
        ]
      },
      {
        "name": "sba-cheque-controller",
        "endpoints": [
          "DELETE /api/sbacheques",
          "GET /api/sbacheques/{id}",
          "POST /api/sbacheques",
          "PUT /api/sbacheques"
        ]
      },
      {
        "name": "sba-clase-entidad-controller",
        "endpoints": [
          "DELETE /api/sbaclaseentidades",
          "GET /api/sbaclaseentidades/findAll",
          "GET /api/sbaclaseentidades/findAllByEstado/{estado}",
          "GET /api/sbaclaseentidades/findByCodigo/{codigo}",
          "GET /api/sbaclaseentidades/{id}",
          "POST /api/sbaclaseentidades",
          "POST /api/sbaclaseentidades/findAllByIdList",
          "PUT /api/sbaclaseentidades"
        ]
      },
      {
        "name": "sba-conciliacion-controller",
        "endpoints": [
          "DELETE /api/sbaconciliaciones",
          "GET /api/sbaconciliaciones/{id}",
          "POST /api/sbaconciliaciones",
          "PUT /api/sbaconciliaciones"
        ]
      },
      {
        "name": "sba-configuracion-banco-controller",
        "endpoints": [
          "DELETE /api/sbaconfiguracionbancos",
          "GET /api/sbaconfiguracionbancos/findAllByCodigoConfiguracion/{codigo}",
          "GET /api/sbaconfiguracionbancos/findAllByConfiguracion/{idConfiguracion}",
          "GET /api/sbaconfiguracionbancos/findAllByIdConfiguracion/{idConfiguracion}",
          "GET /api/sbaconfiguracionbancos/{sbaConfiguracion}/{tbBanco}",
          "POST /api/sbaconfiguracionbancos",
          "POST /api/sbaconfiguracionbancos/insertAndDeleteAllCustom",
          "PUT /api/sbaconfiguracionbancos"
        ]
      },
      {
        "name": "sba-configuracion-controller",
        "endpoints": [
          "DELETE /api/sbaconfiguraciones",
          "GET /api/sbaconfiguraciones/findAll",
          "GET /api/sbaconfiguraciones/{id}",
          "POST /api/sbaconfiguraciones",
          "POST /api/sbaconfiguraciones/findAllByIdList",
          "PUT /api/sbaconfiguraciones"
        ]
      },
      {
        "name": "sba-configuracion-pago-controller",
        "endpoints": [
          "DELETE /api/sbaconfiguracionpagos",
          "GET /api/sbaconfiguracionpagos/findAllByIdConfiguracion/{idConfiguracion}",
          "GET /api/sbaconfiguracionpagos/{sbaConfiguracion}/{tbTipoPago}",
          "POST /api/sbaconfiguracionpagos",
          "POST /api/sbaconfiguracionpagos/insertAndDeleteAllCustom",
          "PUT /api/sbaconfiguracionpagos"
        ]
      },
      {
        "name": "sba-configuracion-tipo-comprobante-controller",
        "endpoints": [
          "DELETE /api/sbaconfiguraciontipocomprobantes",
          "GET /api/sbaconfiguraciontipocomprobantes/findAllByCodigoSbaConfiguracion/{codigo}",
          "GET /api/sbaconfiguraciontipocomprobantes/findAllByIdConfiguracion/{idConfiguracion}",
          "GET /api/sbaconfiguraciontipocomprobantes/findAllByIdSbaConfiguracion/{idConfiguracion}",
          "GET /api/sbaconfiguraciontipocomprobantes/{sbaConfiguracion}/{tbTipoComprobante}",
          "POST /api/sbaconfiguraciontipocomprobantes",
          "POST /api/sbaconfiguraciontipocomprobantes/insertAndDeleteAllCustom",
          "PUT /api/sbaconfiguraciontipocomprobantes"
        ]
      },
      {
        "name": "sba-cuenta-banco-controller",
        "endpoints": [
          "DELETE /api/sbacuentabancos",
          "GET /api/sbacuentabancos/{id}",
          "POST /api/sbacuentabancos",
          "PUT /api/sbacuentabancos"
        ]
      },
      {
        "name": "sba-cuenta-banco-empleado-controller",
        "endpoints": [
          "DELETE /api/sbacuentabancoempleados",
          "GET /api/sbacuentabancoempleados/{sbaCuentaBanco}/{idEmpleado}",
          "POST /api/sbacuentabancoempleados",
          "PUT /api/sbacuentabancoempleados"
        ]
      },
      {
        "name": "sba-detraccion-controller",
        "endpoints": [
          "DELETE /api/sbadetracciones",
          "GET /api/sbadetracciones/{id}",
          "POST /api/sbadetracciones",
          "PUT /api/sbadetracciones"
        ]
      },
      {
        "name": "sba-estado-cuenta-controller",
        "endpoints": [
          "DELETE /api/sbaestadocuentas",
          "GET /api/sbaestadocuentas/{id}",
          "POST /api/sbaestadocuentas",
          "PUT /api/sbaestadocuentas"
        ]
      },
      {
        "name": "sba-extracto-bancario-controller",
        "endpoints": [
          "DELETE /api/sbaextractobancarios",
          "GET /api/sbaextractobancarios/{id}",
          "POST /api/sbaextractobancarios",
          "PUT /api/sbaextractobancarios"
        ]
      },
      {
        "name": "sba-operacion-financiera-controller",
        "endpoints": [
          "DELETE /api/sbaoperacionfinancieras",
          "GET /api/sbaoperacionfinancieras/{id}",
          "POST /api/sbaoperacionfinancieras",
          "PUT /api/sbaoperacionfinancieras"
        ]
      },
      {
        "name": "sba-operacion-financiera-empleado-controller",
        "endpoints": [
          "DELETE /api/sbaoperacionfinancieraempleados",
          "GET /api/sbaoperacionfinancieraempleados/{sbaOperacionFinanciera}/{idEmpleado}",
          "POST /api/sbaoperacionfinancieraempleados",
          "PUT /api/sbaoperacionfinancieraempleados"
        ]
      },
      {
        "name": "sba-opracion-financiera-detalle-controller",
        "endpoints": [
          "DELETE /api/sbaopracionfinancieradetalles",
          "GET /api/sbaopracionfinancieradetalles/{id}",
          "POST /api/sbaopracionfinancieradetalles",
          "PUT /api/sbaopracionfinancieradetalles"
        ]
      },
      {
        "name": "sba-origen-operacion-financiera-controller",
        "endpoints": [
          "DELETE /api/sbaorigenoperacionfinancieras",
          "GET /api/sbaorigenoperacionfinancieras/findAll",
          "GET /api/sbaorigenoperacionfinancieras/findByCodigo/{codigo}",
          "GET /api/sbaorigenoperacionfinancieras/{id}",
          "POST /api/sbaorigenoperacionfinancieras",
          "POST /api/sbaorigenoperacionfinancieras/findAllByCodigoList",
          "POST /api/sbaorigenoperacionfinancieras/findAllByIdList",
          "PUT /api/sbaorigenoperacionfinancieras"
        ]
      },
      {
        "name": "sba-solicitud-pago-controller",
        "endpoints": [
          "DELETE /api/sbasolicitudpagos",
          "GET /api/sbasolicitudpagos/{id}",
          "POST /api/sbasolicitudpagos",
          "PUT /api/sbasolicitudpagos"
        ]
      },
      {
        "name": "sba-solicitud-pago-detalle-controller",
        "endpoints": [
          "DELETE /api/sbasolicitudpagodetalles",
          "GET /api/sbasolicitudpagodetalles/{id}",
          "POST /api/sbasolicitudpagodetalles",
          "PUT /api/sbasolicitudpagodetalles"
        ]
      },
      {
        "name": "sba-solicitud-pago-detalle-documento-controller",
        "endpoints": [
          "DELETE /api/sbasolicitudpagodetalledocumentos",
          "GET /api/sbasolicitudpagodetalledocumentos/{id}",
          "POST /api/sbasolicitudpagodetalledocumentos",
          "PUT /api/sbasolicitudpagodetalledocumentos"
        ]
      },
      {
        "name": "sba-solicitud-pago-estado-controller",
        "endpoints": [
          "DELETE /api/sbasolicitudpagoestados",
          "GET /api/sbasolicitudpagoestados/{id}",
          "POST /api/sbasolicitudpagoestados",
          "PUT /api/sbasolicitudpagoestados"
        ]
      },
      {
        "name": "sba-tipo-estado-anticipo-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoanticipos",
          "GET /api/sbatipoestadoanticipos/findAll",
          "GET /api/sbatipoestadoanticipos/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoanticipos/{id}",
          "POST /api/sbatipoestadoanticipos",
          "POST /api/sbatipoestadoanticipos/findAllById",
          "POST /api/sbatipoestadoanticipos/findAllByIdList",
          "PUT /api/sbatipoestadoanticipos"
        ]
      },
      {
        "name": "sba-tipo-estado-estado-cuenta-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoestadocuentas",
          "GET /api/sbatipoestadoestadocuentas/findAll",
          "GET /api/sbatipoestadoestadocuentas/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoestadocuentas/{id}",
          "POST /api/sbatipoestadoestadocuentas",
          "POST /api/sbatipoestadoestadocuentas/findAllByCodigoList",
          "POST /api/sbatipoestadoestadocuentas/findAllByIdList",
          "PUT /api/sbatipoestadoestadocuentas"
        ]
      },
      {
        "name": "sba-tipo-estado-letra-aceptada-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoletraaceptadas",
          "GET /api/sbatipoestadoletraaceptadas/findAll",
          "GET /api/sbatipoestadoletraaceptadas/findAllByEstado/{estado}",
          "GET /api/sbatipoestadoletraaceptadas/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoletraaceptadas/{id}",
          "POST /api/sbatipoestadoletraaceptadas",
          "POST /api/sbatipoestadoletraaceptadas/findAllByCodigoList",
          "POST /api/sbatipoestadoletraaceptadas/findAllByIdList",
          "PUT /api/sbatipoestadoletraaceptadas"
        ]
      },
      {
        "name": "sba-tipo-estado-operacion-financiera-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadooperacionfinancieras",
          "GET /api/sbatipoestadooperacionfinancieras/findAll",
          "GET /api/sbatipoestadooperacionfinancieras/findAllByEstado/{estado}",
          "GET /api/sbatipoestadooperacionfinancieras/findByCodigo/{codigo}",
          "GET /api/sbatipoestadooperacionfinancieras/{id}",
          "POST /api/sbatipoestadooperacionfinancieras",
          "POST /api/sbatipoestadooperacionfinancieras/findAllByIdList",
          "PUT /api/sbatipoestadooperacionfinancieras"
        ]
      },
      {
        "name": "sba-tipo-estado-operacion-transito-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadooperaciontransitos",
          "GET /api/sbatipoestadooperaciontransitos/findAll",
          "GET /api/sbatipoestadooperaciontransitos/findAllByEstado/{estado}",
          "GET /api/sbatipoestadooperaciontransitos/findAllByEstadoNgSelect/{estado}",
          "GET /api/sbatipoestadooperaciontransitos/findByCodigo/{codigo}",
          "GET /api/sbatipoestadooperaciontransitos/{id}",
          "POST /api/sbatipoestadooperaciontransitos",
          "POST /api/sbatipoestadooperaciontransitos/findAllByIdList",
          "PUT /api/sbatipoestadooperaciontransitos"
        ]
      },
      {
        "name": "sba-tipo-estado-retencion-emision-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoretencionemisiones",
          "GET /api/sbatipoestadoretencionemisiones/findAll",
          "GET /api/sbatipoestadoretencionemisiones/findAllByEstado/{estado}",
          "GET /api/sbatipoestadoretencionemisiones/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoretencionemisiones/{id}",
          "POST /api/sbatipoestadoretencionemisiones",
          "POST /api/sbatipoestadoretencionemisiones/findAllByCodigo",
          "POST /api/sbatipoestadoretencionemisiones/findAllById",
          "PUT /api/sbatipoestadoretencionemisiones"
        ]
      },
      {
        "name": "sba-tipo-estado-retencion-recepcion-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoretencionrecepciones",
          "GET /api/sbatipoestadoretencionrecepciones/findAll",
          "GET /api/sbatipoestadoretencionrecepciones/findAllByEstado/{estado}",
          "GET /api/sbatipoestadoretencionrecepciones/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoretencionrecepciones/{id}",
          "POST /api/sbatipoestadoretencionrecepciones",
          "POST /api/sbatipoestadoretencionrecepciones/findAllByIdList",
          "PUT /api/sbatipoestadoretencionrecepciones"
        ]
      },
      {
        "name": "sba-tipo-estado-reversion-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadoreversiones",
          "GET /api/sbatipoestadoreversiones/findAll",
          "GET /api/sbatipoestadoreversiones/findByCodigo/{codigo}",
          "GET /api/sbatipoestadoreversiones/{id}",
          "POST /api/sbatipoestadoreversiones",
          "POST /api/sbatipoestadoreversiones/findAllByCodigoList",
          "POST /api/sbatipoestadoreversiones/findAllByIdList",
          "PUT /api/sbatipoestadoreversiones"
        ]
      },
      {
        "name": "sba-tipo-estado-solicitud-pago-controller",
        "endpoints": [
          "DELETE /api/sbatipoestadosolicitudpagos",
          "GET /api/sbatipoestadosolicitudpagos/findAll",
          "GET /api/sbatipoestadosolicitudpagos/findAllByEstado/{estado}",
          "GET /api/sbatipoestadosolicitudpagos/findByCodigo/{codigo}",
          "GET /api/sbatipoestadosolicitudpagos/{id}",
          "POST /api/sbatipoestadosolicitudpagos",
          "POST /api/sbatipoestadosolicitudpagos/findAllByCodigoList",
          "POST /api/sbatipoestadosolicitudpagos/findAllById",
          "POST /api/sbatipoestadosolicitudpagos/findAllByIdList",
          "PUT /api/sbatipoestadosolicitudpagos"
        ]
      },
      {
        "name": "sba-tipo-movimiento-clase-entidad-controller",
        "endpoints": [
          "DELETE /api/sbatipomovimientoclaseentidades",
          "GET /api/sbatipomovimientoclaseentidades/findAllByIdTipoMovimiento/{idTipoMovimiento}",
          "GET /api/sbatipomovimientoclaseentidades/{sbaTipoMovimiento}/{sbaClaseEntidad}",
          "POST /api/sbatipomovimientoclaseentidades",
          "POST /api/sbatipomovimientoclaseentidades/insertAndDeleteAllCustom",
          "PUT /api/sbatipomovimientoclaseentidades"
        ]
      },
      {
        "name": "sba-tipo-movimiento-controller",
        "endpoints": [
          "DELETE /api/sbatipomovimientos",
          "GET /api/sbatipomovimientos/findAll",
          "GET /api/sbatipomovimientos/{id}",
          "POST /api/sbatipomovimientos",
          "POST /api/sbatipomovimientos/findAllByIdList",
          "PUT /api/sbatipomovimientos"
        ]
      },
      {
        "name": "sba-tipo-pago-detraccion-controller",
        "endpoints": [
          "DELETE /api/sbatipopagodetracciones",
          "GET /api/sbatipopagodetracciones/findAll",
          "GET /api/sbatipopagodetracciones/{id}",
          "POST /api/sbatipopagodetracciones",
          "PUT /api/sbatipopagodetracciones"
        ]
      },
      {
        "name": "sba-tipo-provision-controller",
        "endpoints": [
          "DELETE /api/sbatipoprovisiones",
          "GET /api/sbatipoprovisiones/{id}",
          "POST /api/sbatipoprovisiones",
          "PUT /api/sbatipoprovisiones"
        ]
      },
      {
        "name": "sba-tipo-solicitud-pago-controller",
        "endpoints": [
          "DELETE /api/sbatiposolicitudpagos",
          "GET /api/sbatiposolicitudpagos/findAllByEstado/{estado}",
          "GET /api/sbatiposolicitudpagos/findAllByIdSistema/{idSistema}",
          "GET /api/sbatiposolicitudpagos/findByCodigo/{codigo}",
          "GET /api/sbatiposolicitudpagos/{id}",
          "POST /api/sbatiposolicitudpagos",
          "POST /api/sbatiposolicitudpagos/findAllByCodigoList",
          "POST /api/sbatiposolicitudpagos/findAllByIdList",
          "PUT /api/sbatiposolicitudpagos"
        ]
      },
      {
        "name": "sca-configuracion-controller",
        "endpoints": [
          "DELETE /api/scaconfiguraciones",
          "GET /api/scaconfiguraciones/findAll",
          "GET /api/scaconfiguraciones/{id}",
          "POST /api/scaconfiguraciones",
          "POST /api/scaconfiguraciones/findAllByIdList",
          "PUT /api/scaconfiguraciones"
        ]
      },
      {
        "name": "sca-configuracion-unidad-medida-controller",
        "endpoints": [
          "DELETE /api/scaconfiguracionunidadmedidas",
          "GET /api/scaconfiguracionunidadmedidas/findAllCustom/{codigo}",
          "GET /api/scaconfiguracionunidadmedidas/findAllIdByIdConfiguracion/{idConfiguracion}",
          "GET /api/scaconfiguracionunidadmedidas/{scaConfiguracion}/{tbUnidadMedida}",
          "POST /api/scaconfiguracionunidadmedidas",
          "POST /api/scaconfiguracionunidadmedidas/insertAndDeleteAllCustom",
          "PUT /api/scaconfiguracionunidadmedidas"
        ]
      },
      {
        "name": "sca-tipo-cargo-guia-aerea-controller",
        "endpoints": [
          "DELETE /api/scatipocargoguiaaereas",
          "GET /api/scatipocargoguiaaereas/findAll",
          "GET /api/scatipocargoguiaaereas/findAllByEstado/{estado}",
          "GET /api/scatipocargoguiaaereas/findByCodigo/{codigo}",
          "GET /api/scatipocargoguiaaereas/{id}",
          "POST /api/scatipocargoguiaaereas",
          "POST /api/scatipocargoguiaaereas/findAllByIdList",
          "PUT /api/scatipocargoguiaaereas"
        ]
      },
      {
        "name": "sca-tipo-estado-routing-controller",
        "endpoints": [
          "DELETE /api/scatipoestadoroutinges",
          "GET /api/scatipoestadoroutinges/findAll",
          "GET /api/scatipoestadoroutinges/findAllByEstado/{estado}",
          "GET /api/scatipoestadoroutinges/findAllByEstadoNgSelect/{estado}",
          "GET /api/scatipoestadoroutinges/findByCodigo/{codigo}",
          "GET /api/scatipoestadoroutinges/{id}",
          "POST /api/scatipoestadoroutinges",
          "POST /api/scatipoestadoroutinges/findAllByCodigoList",
          "POST /api/scatipoestadoroutinges/findAllByIdList",
          "PUT /api/scatipoestadoroutinges"
        ]
      },
      {
        "name": "sca-tipo-formato-controller",
        "endpoints": [
          "DELETE /api/scatipoformatos",
          "GET /api/scatipoformatos/{id}",
          "POST /api/scatipoformatos",
          "PUT /api/scatipoformatos"
        ]
      },
      {
        "name": "sca-tipo-routing-controller",
        "endpoints": [
          "DELETE /api/scatiporoutinges",
          "GET /api/scatiporoutinges/findAll",
          "GET /api/scatiporoutinges/findAllByEstado/{estado}",
          "GET /api/scatiporoutinges/{id}",
          "POST /api/scatiporoutinges",
          "POST /api/scatiporoutinges/findAllByIdList",
          "PUT /api/scatiporoutinges"
        ]
      },
      {
        "name": "sci-acceso-controller",
        "endpoints": [
          "DELETE /api/sciaccesos",
          "GET /api/sciaccesos/{sciPerfil}/{sciFormulario}/{sciAccion}",
          "POST /api/sciaccesos",
          "PUT /api/sciaccesos"
        ]
      },
      {
        "name": "sci-accion-controller",
        "endpoints": [
          "DELETE /api/sciacciones",
          "GET /api/sciacciones/findAll",
          "GET /api/sciacciones/findAllByEstado/{estado}",
          "GET /api/sciacciones/findByCodigo/{codigo}",
          "GET /api/sciacciones/{id}",
          "POST /api/sciacciones",
          "POST /api/sciacciones/findAllByIdList",
          "PUT /api/sciacciones"
        ]
      },
      {
        "name": "sci-area-controller",
        "endpoints": [
          "DELETE /api/sciareas",
          "GET /api/sciareas/findAll",
          "GET /api/sciareas/findAllByEstado/{estado}",
          "GET /api/sciareas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sciareas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sciareas/findCount",
          "GET /api/sciareas/{id}",
          "POST /api/sciareas",
          "POST /api/sciareas/findAllByIdList",
          "PUT /api/sciareas"
        ]
      },
      {
        "name": "sci-area-sistema-controller",
        "endpoints": [
          "DELETE /api/sciareasistemas",
          "GET /api/sciareasistemas/findAllIdByIdArea/{idArea}",
          "GET /api/sciareasistemas/{sciArea}/{sciSistema}",
          "POST /api/sciareasistemas",
          "POST /api/sciareasistemas/insertAndDeleteAllCustom",
          "PUT /api/sciareasistemas"
        ]
      },
      {
        "name": "sci-cargo-controller",
        "endpoints": [
          "DELETE /api/scicargos",
          "GET /api/scicargos/findAll",
          "GET /api/scicargos/findAllByEstado/{estado}",
          "GET /api/scicargos/findAllByEstadoNgSelect/{estado}",
          "GET /api/scicargos/findByCodigo/{codigo}",
          "GET /api/scicargos/{id}",
          "POST /api/scicargos",
          "POST /api/scicargos/findAllByCodigoList",
          "POST /api/scicargos/findAllByIdList",
          "PUT /api/scicargos"
        ]
      },
      {
        "name": "sci-cargo-sistema-controller",
        "endpoints": [
          "DELETE /api/scicargosistemas",
          "GET /api/scicargosistemas/findAllIdByIdCargo/{idCargo}",
          "GET /api/scicargosistemas/{sciCargo}/{sciSistema}",
          "POST /api/scicargosistemas",
          "POST /api/scicargosistemas/insertAndDeleteAllCustom",
          "PUT /api/scicargosistemas"
        ]
      },
      {
        "name": "sci-categoria-documento-emitido-controller",
        "endpoints": [
          "DELETE /api/scicategoriadocumentoemitidos",
          "GET /api/scicategoriadocumentoemitidos/findAll",
          "GET /api/scicategoriadocumentoemitidos/findAllByEstado/{estado}",
          "GET /api/scicategoriadocumentoemitidos/findAllByEstadoNgSelect/{estado}",
          "GET /api/scicategoriadocumentoemitidos/findByCodigo/{codigo}",
          "GET /api/scicategoriadocumentoemitidos/{id}",
          "POST /api/scicategoriadocumentoemitidos",
          "POST /api/scicategoriadocumentoemitidos/findAllByIdList",
          "PUT /api/scicategoriadocumentoemitidos"
        ]
      },
      {
        "name": "sci-configuracion-controller",
        "endpoints": [
          "DELETE /api/sciconfiguraciones",
          "GET /api/sciconfiguraciones/findAll",
          "GET /api/sciconfiguraciones/{id}",
          "POST /api/sciconfiguraciones",
          "POST /api/sciconfiguraciones/findAllByIdList",
          "PUT /api/sciconfiguraciones"
        ]
      },
      {
        "name": "sci-configuracion-tipo-documento-controller",
        "endpoints": [
          "DELETE /api/sciconfiguraciontipodocumentos",
          "GET /api/sciconfiguraciontipodocumentos/findAllByIdConfiguracion/{idConfiguracion}",
          "GET /api/sciconfiguraciontipodocumentos/{sciConfiguracion}/{tbTipoDocumento}",
          "POST /api/sciconfiguraciontipodocumentos",
          "POST /api/sciconfiguraciontipodocumentos/insertAndDeleteAllCustom",
          "PUT /api/sciconfiguraciontipodocumentos"
        ]
      },
      {
        "name": "sci-formulario-accion-controller",
        "endpoints": [
          "DELETE /api/sciformularioacciones",
          "GET /api/sciformularioacciones/findAllByIdFormulario/{idFormulario}",
          "GET /api/sciformularioacciones/{idAccion}/{idFormulario}",
          "POST /api/sciformularioacciones",
          "POST /api/sciformularioacciones/findAllByIdFormularioList",
          "POST /api/sciformularioacciones/insertAndDeleteAllCustom",
          "PUT /api/sciformularioacciones"
        ]
      },
      {
        "name": "sci-formulario-campo-controller",
        "endpoints": [
          "DELETE /api/sciformulariocampos",
          "GET /api/sciformulariocampos/findAllByEstado/{estado}",
          "GET /api/sciformulariocampos/findAllByIdFormulario/{idFormulario}",
          "POST /api/sciformulariocampos",
          "PUT /api/sciformulariocampos"
        ]
      },
      {
        "name": "sci-formulario-controller",
        "endpoints": [
          "DELETE /api/sciformularios",
          "GET /api/sciformularios/downloadTemplateByCodigo/{codigo}",
          "GET /api/sciformularios/findAll",
          "GET /api/sciformularios/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/sciformularios/findAllByEstado/{estado}",
          "GET /api/sciformularios/findAllByIdSistemaAndCtrlCodigo/{idSistema}",
          "GET /api/sciformularios/findAllCodigoSistemaByCtrlCodigo/{ctrlCodigo}",
          "GET /api/sciformularios/findByCodigo/{codigo}",
          "GET /api/sciformularios/findByCodigoCustom/{codigo}",
          "GET /api/sciformularios/findByCodigoCustomGenerate/{codigo}",
          "GET /api/sciformularios/findByCodigoFormularioAndCodigoSistema/{codigoFormulario}/{codigoSistema}",
          "GET /api/sciformularios/{id}",
          "POST /api/sciformularios",
          "POST /api/sciformularios/findAllByCodigoList",
          "POST /api/sciformularios/findAllByCodigoSistemaAndIdList/{codigoSistema}",
          "POST /api/sciformularios/findAllByCodigoSistemaListAndCtrlCorrelativo/{ctrlCorrelativo}",
          "POST /api/sciformularios/findAllByIdList",
          "POST /api/sciformularios/findAllByIdListCustom",
          "POST /api/sciformularios/findAllByIdSistemaList",
          "POST /api/sciformularios/findAllByIdSistemaListCustom",
          "POST /api/sciformularios/findAllSciSistemaByIdFormularioList",
          "PUT /api/sciformularios"
        ]
      },
      {
        "name": "sci-grupo-sistema-controller",
        "endpoints": [
          "DELETE /api/scigruposistemas",
          "GET /api/scigruposistemas/findAll",
          "GET /api/scigruposistemas/findAllByEstado/{estado}",
          "GET /api/scigruposistemas/{id}",
          "POST /api/scigruposistemas",
          "POST /api/scigruposistemas/findAllByIdList",
          "PUT /api/scigruposistemas"
        ]
      },
      {
        "name": "sci-menu-controller",
        "endpoints": [
          "DELETE /api/scimenus",
          "GET /api/scimenus/findAll",
          "GET /api/scimenus/findAllByCodigoSistemaAndIdMenuPadre/{codigoSistema}/{idMenuPadre}",
          "GET /api/scimenus/{id}",
          "POST /api/scimenus",
          "POST /api/scimenus/findAllByCodigoSistemaAndIdFormularioList/{codigoSistema}",
          "POST /api/scimenus/findAllByCodigoSistemaAndIdFormularioListCustom/{codigoSistema}",
          "POST /api/scimenus/findAllByIdFormularioList",
          "POST /api/scimenus/findAllByIdList",
          "PUT /api/scimenus"
        ]
      },
      {
        "name": "sci-perfil-controller",
        "endpoints": [
          "DELETE /api/sciperfiles",
          "GET /api/sciperfiles/findAll",
          "GET /api/sciperfiles/findAllByEstado/{estado}",
          "GET /api/sciperfiles/{id}",
          "POST /api/sciperfiles",
          "POST /api/sciperfiles/findAllByIdList",
          "PUT /api/sciperfiles"
        ]
      },
      {
        "name": "sci-rol-controller",
        "endpoints": [
          "DELETE /api/sciroles",
          "GET /api/sciroles/findAll",
          "GET /api/sciroles/findAllByEstado/{estado}",
          "GET /api/sciroles/findAllByEstadoNgSelect/{estado}",
          "GET /api/sciroles/findAllByIdSistema/{idSistema}",
          "GET /api/sciroles/findAllByIdSistemaAndEstadoNgSelect/{idSistema}/{estado}",
          "GET /api/sciroles/findByCodigo/{codigo}",
          "GET /api/sciroles/findByIdGetNonPrimitiveData/{id}",
          "GET /api/sciroles/{id}",
          "POST /api/sciroles",
          "POST /api/sciroles/findAllByIdList",
          "PUT /api/sciroles"
        ]
      },
      {
        "name": "sci-sistema-catalogo-operativo-controller",
        "endpoints": [
          "DELETE /api/scisistemacatalogooperativos",
          "GET /api/scisistemacatalogooperativos/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/scisistemacatalogooperativos/findAllByCodigoSistemaCustom/{codigoSistema}",
          "GET /api/scisistemacatalogooperativos/findAllByIdSistema/{idSistema}",
          "GET /api/scisistemacatalogooperativos/findAllBySistema/{idSistema}",
          "GET /api/scisistemacatalogooperativos/findAllBySistemaCustom/{idSistema}",
          "GET /api/scisistemacatalogooperativos/findAllCatalogoOperativoByIdSistemaNot/{idSistema}",
          "GET /api/scisistemacatalogooperativos/findAllSciSistema",
          "GET /api/scisistemacatalogooperativos/findAllTbCatalogoOperativoByIdSistema/{idSistema}",
          "GET /api/scisistemacatalogooperativos/{sciSistema}/{tbCatalogoOperativo}",
          "POST /api/scisistemacatalogooperativos",
          "POST /api/scisistemacatalogooperativos/insertAndDeleteAllCustom",
          "PUT /api/scisistemacatalogooperativos",
          "PUT /api/scisistemacatalogooperativos/updateCustom"
        ]
      },
      {
        "name": "sci-sistema-controller",
        "endpoints": [
          "DELETE /api/scisistemas",
          "GET /api/scisistemas/findAll",
          "GET /api/scisistemas/findAllByEstado/{estado}",
          "GET /api/scisistemas/findAllByEstadoNgSelect/{estado}",
          "GET /api/scisistemas/findAllByIdGrupoSistema/{idGrupoSistema}",
          "GET /api/scisistemas/findAllCustom",
          "GET /api/scisistemas/findAllCustomForAcceso",
          "GET /api/scisistemas/findAllWhenIdTipoOperadorIsNotNull",
          "GET /api/scisistemas/findAllWithSciRoles",
          "GET /api/scisistemas/findByCodigo/{codigo}",
          "GET /api/scisistemas/findByIdCustom/{id}",
          "GET /api/scisistemas/findIdByCodigo/{codigo}",
          "GET /api/scisistemas/{id}",
          "POST /api/scisistemas",
          "POST /api/scisistemas/findAllByCodigoFormularioList",
          "POST /api/scisistemas/findAllByCodigoList",
          "POST /api/scisistemas/findAllByIdFormularioListAndCodigo/{codigo}",
          "POST /api/scisistemas/findAllByIdList",
          "POST /api/scisistemas/findAllByIdTipoOperadorList",
          "POST /api/scisistemas/findAllCustomForAccesoByCodigoSistemaList",
          "POST /api/scisistemas/findAllIdByCodigoList",
          "POST /api/scisistemas/findAllSciSistemaByIdFormularioList",
          "PUT /api/scisistemas"
        ]
      },
      {
        "name": "sci-sistema-moneda-controller",
        "endpoints": [
          "DELETE /api/scisistemamonedas",
          "GET /api/scisistemamonedas/findAllByCodigoSistema/{codSistema}",
          "GET /api/scisistemamonedas/findAllByIdSistema/{idSistema}",
          "GET /api/scisistemamonedas/findAllByIdSistemaAndEstadoMoneda/{sciSistema}/{estado}",
          "GET /api/scisistemamonedas/findAllTbMonedaByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistemamonedas/findByIdSistema/{idSistema}",
          "GET /api/scisistemamonedas/{sciSistema}/{tbMoneda}",
          "POST /api/scisistemamonedas",
          "POST /api/scisistemamonedas/findByCodigoSistemaAndEstado",
          "POST /api/scisistemamonedas/insertAndDeleteAllCustom",
          "PUT /api/scisistemamonedas"
        ]
      },
      {
        "name": "sci-sistema-regimen-aduanero-controller",
        "endpoints": [
          "DELETE /api/scisistemaregimenaduaneros",
          "GET /api/scisistemaregimenaduaneros/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistemaregimenaduaneros/findAllByIdSistema/{idSistema}",
          "GET /api/scisistemaregimenaduaneros/{sciSistema}/{tbRegimenAduanero}",
          "POST /api/scisistemaregimenaduaneros",
          "POST /api/scisistemaregimenaduaneros/insertAndDeleteAllCustom",
          "PUT /api/scisistemaregimenaduaneros"
        ]
      },
      {
        "name": "sci-sistema-tipo-envio-controller",
        "endpoints": [
          "DELETE /api/scisistematipoenvios",
          "GET /api/scisistematipoenvios/findAllByIdSistema/{idSistema}",
          "GET /api/scisistematipoenvios/findAllTbTipoEnvioByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistematipoenvios/{sciSistema}/{tbTipoEnvio}",
          "POST /api/scisistematipoenvios",
          "POST /api/scisistematipoenvios/insertAndDeleteAllCustom",
          "PUT /api/scisistematipoenvios"
        ]
      },
      {
        "name": "sci-sistema-tipo-mercaderia-controller",
        "endpoints": [
          "DELETE /api/scisistematipomercaderias",
          "GET /api/scisistematipomercaderias/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistematipomercaderias/findAllByIdSistema/{idSistema}",
          "GET /api/scisistematipomercaderias/{sciSistema}/{tbTipoMercaderia}",
          "POST /api/scisistematipomercaderias",
          "POST /api/scisistematipomercaderias/insertAndDeleteAllCustom",
          "PUT /api/scisistematipomercaderias"
        ]
      },
      {
        "name": "sci-sistema-tipo-servicio-controller",
        "endpoints": [
          "DELETE /api/scisistematiposervicios",
          "GET /api/scisistematiposervicios/findAllByIdSistema/{idSistema}",
          "GET /api/scisistematiposervicios/findAllTbTipoServicioByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistematiposervicios/{sciSistema}/{tbTipoServicio}",
          "POST /api/scisistematiposervicios",
          "POST /api/scisistematiposervicios/insertAndDeleteAllCustom",
          "PUT /api/scisistematiposervicios"
        ]
      },
      {
        "name": "sci-sistema-tipo-transaccion-aduanera-controller",
        "endpoints": [
          "DELETE /api/scisistematipotransaccionaduaneras",
          "GET /api/scisistematipotransaccionaduaneras/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/scisistematipotransaccionaduaneras/findAllByIdSistema/{idSistema}",
          "GET /api/scisistematipotransaccionaduaneras/findAllTbTipoTransaccionAduaneraByCodigoSistema/{codigoSistema}",
          "GET /api/scisistematipotransaccionaduaneras/{sciSistema}/{tbTipoTransaccionAduanera}",
          "POST /api/scisistematipotransaccionaduaneras",
          "POST /api/scisistematipotransaccionaduaneras/insertAndDeleteAllCustom",
          "PUT /api/scisistematipotransaccionaduaneras"
        ]
      },
      {
        "name": "sci-sistema-unidad-medida-controller",
        "endpoints": [
          "DELETE /api/scisistemaunidadmedidas",
          "GET /api/scisistemaunidadmedidas/findAllByIdSistema/{idSistema}",
          "GET /api/scisistemaunidadmedidas/findAllUnidadMedidaByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/scisistemaunidadmedidas/{sciSistema}/{tbUnidadMedida}",
          "POST /api/scisistemaunidadmedidas",
          "POST /api/scisistemaunidadmedidas/insertAndDeleteAllCustom",
          "PUT /api/scisistemaunidadmedidas"
        ]
      },
      {
        "name": "sco-destinacion-compra-controller",
        "endpoints": [
          "DELETE /api/scodestinacioncompras",
          "GET /api/scodestinacioncompras/findAll",
          "GET /api/scodestinacioncompras/findAllByEstado/{estado}",
          "GET /api/scodestinacioncompras/findAllByEstadoNgSelect/{estado}",
          "GET /api/scodestinacioncompras/{id}",
          "POST /api/scodestinacioncompras",
          "POST /api/scodestinacioncompras/findAllByCodigoList",
          "POST /api/scodestinacioncompras/findAllByIdList",
          "PUT /api/scodestinacioncompras"
        ]
      },
      {
        "name": "sco-tipo-compra-comprobante-afecto-controller",
        "endpoints": [
          "DELETE /api/scotipocompracomprobanteafectos",
          "GET /api/scotipocompracomprobanteafectos/findAllByIdTipoCompraNgSelect/{idTipoCompra}",
          "GET /api/scotipocompracomprobanteafectos/findAllTbTipoComprobanteAfectoByIdTipoCompraAndTipoComprobante/{idTipoCompra}/{idTipoComprobante}",
          "GET /api/scotipocompracomprobanteafectos/{scoTipoCompra}/{tbTipoComprobante}/{tbTipoComprobanteAfecto}",
          "POST /api/scotipocompracomprobanteafectos",
          "POST /api/scotipocompracomprobanteafectos/insertAndDeleteAllCustom",
          "PUT /api/scotipocompracomprobanteafectos"
        ]
      },
      {
        "name": "sco-tipo-compra-controller",
        "endpoints": [
          "DELETE /api/scotipocompras",
          "GET /api/scotipocompras/findAll",
          "GET /api/scotipocompras/findAllByEstado/{estado}",
          "GET /api/scotipocompras/findByCodigo/{codigo}",
          "GET /api/scotipocompras/{id}",
          "POST /api/scotipocompras",
          "POST /api/scotipocompras/findAllByIdList",
          "PUT /api/scotipocompras"
        ]
      },
      {
        "name": "sco-tipo-comprobante-compra-documento-controller",
        "endpoints": [
          "DELETE /api/scotipocomprobantecompradocumentos",
          "DELETE /api/scotipocomprobantecompradocumentos/deleteSelect",
          "GET /api/scotipocomprobantecompradocumentos/findAllByIdTipoCompra/{idTipoCompra}",
          "GET /api/scotipocomprobantecompradocumentos/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/scotipocomprobantecompradocumentos/findAllTbTipoComprobanteByIdTipoCompra/{idTipoCompra}",
          "GET /api/scotipocomprobantecompradocumentos/{tbTipoComprobante}/{scoTipoCompra}/{tbTipoDocumento}/{tbTipoContribuyente}",
          "POST /api/scotipocomprobantecompradocumentos",
          "POST /api/scotipocomprobantecompradocumentos/insertList",
          "PUT /api/scotipocomprobantecompradocumentos"
        ]
      },
      {
        "name": "sco-tipo-estado-compra-controller",
        "endpoints": [
          "DELETE /api/scotipoestadocompras",
          "GET /api/scotipoestadocompras/findAll",
          "GET /api/scotipoestadocompras/findByCodigo/{codigo}",
          "GET /api/scotipoestadocompras/{id}",
          "POST /api/scotipoestadocompras",
          "POST /api/scotipoestadocompras/findAllByIdList",
          "PUT /api/scotipoestadocompras"
        ]
      },
      {
        "name": "sco-tipo-estado-compra-electronica-controller",
        "endpoints": [
          "DELETE /api/scotipoestadocompraelectronicas",
          "GET /api/scotipoestadocompraelectronicas/findAll",
          "GET /api/scotipoestadocompraelectronicas/findAllByEstado/{estado}",
          "GET /api/scotipoestadocompraelectronicas/findByCodigo/{codigo}",
          "GET /api/scotipoestadocompraelectronicas/{id}",
          "POST /api/scotipoestadocompraelectronicas",
          "POST /api/scotipoestadocompraelectronicas/findAllByIdList",
          "PUT /api/scotipoestadocompraelectronicas"
        ]
      },
      {
        "name": "sco-tipo-estado-financiamiento-controller",
        "endpoints": [
          "DELETE /api/scotipoestadofinanciamientos",
          "GET /api/scotipoestadofinanciamientos/findAll",
          "GET /api/scotipoestadofinanciamientos/findByCodigo/{codigo}",
          "GET /api/scotipoestadofinanciamientos/{id}",
          "POST /api/scotipoestadofinanciamientos",
          "POST /api/scotipoestadofinanciamientos/findAllByCodigoList",
          "POST /api/scotipoestadofinanciamientos/findAllByIdList",
          "PUT /api/scotipoestadofinanciamientos"
        ]
      },
      {
        "name": "sco-tipo-estado-financiamiento-detalle-controller",
        "endpoints": [
          "DELETE /api/scotipoestadofinanciamientodetalles",
          "GET /api/scotipoestadofinanciamientodetalles/findAll",
          "GET /api/scotipoestadofinanciamientodetalles/findByCodigo/{codigo}",
          "GET /api/scotipoestadofinanciamientodetalles/{id}",
          "POST /api/scotipoestadofinanciamientodetalles",
          "POST /api/scotipoestadofinanciamientodetalles/findAllByCodigoList",
          "POST /api/scotipoestadofinanciamientodetalles/findAllByIdList",
          "PUT /api/scotipoestadofinanciamientodetalles"
        ]
      },
      {
        "name": "sco-tipo-estado-orden-compra-controller",
        "endpoints": [
          "DELETE /api/scotipoestadoordencompras",
          "GET /api/scotipoestadoordencompras/findAll",
          "GET /api/scotipoestadoordencompras/findAllByEstado/{estado}",
          "GET /api/scotipoestadoordencompras/findByCodigo/{codigo}",
          "GET /api/scotipoestadoordencompras/{id}",
          "POST /api/scotipoestadoordencompras",
          "POST /api/scotipoestadoordencompras/findAllByIdList",
          "PUT /api/scotipoestadoordencompras"
        ]
      },
      {
        "name": "sco-tipo-estado-orden-compra-detalle-controller",
        "endpoints": [
          "DELETE /api/scotipoestadoordencompradetalles",
          "GET /api/scotipoestadoordencompradetalles/findAll",
          "GET /api/scotipoestadoordencompradetalles/findAllByEstado/{estado}",
          "GET /api/scotipoestadoordencompradetalles/findByCodigo/{codigo}",
          "GET /api/scotipoestadoordencompradetalles/{id}",
          "POST /api/scotipoestadoordencompradetalles",
          "POST /api/scotipoestadoordencompradetalles/findAllByCodigoList",
          "POST /api/scotipoestadoordencompradetalles/findAllByIdList",
          "PUT /api/scotipoestadoordencompradetalles"
        ]
      },
      {
        "name": "sco-tipo-orden-compra-controller",
        "endpoints": [
          "DELETE /api/scotipoordencompras",
          "GET /api/scotipoordencompras/findAllByEstado/{estado}",
          "GET /api/scotipoordencompras/findByCodigo/{codigo}",
          "GET /api/scotipoordencompras/{id}",
          "POST /api/scotipoordencompras",
          "POST /api/scotipoordencompras/findAllByCodigoList",
          "POST /api/scotipoordencompras/findAllByIdList",
          "PUT /api/scotipoordencompras"
        ]
      },
      {
        "name": "scx-analisis-controller",
        "endpoints": [
          "DELETE /api/scxanalisises",
          "GET /api/scxanalisises/findAllByCtrlObligatorio/{ctrlObligatorio}",
          "GET /api/scxanalisises/findAllByEstado/{estado}",
          "GET /api/scxanalisises/findByCodigo/{codigo}",
          "GET /api/scxanalisises/{id}",
          "POST /api/scxanalisises",
          "POST /api/scxanalisises/findAllByCodigoList",
          "POST /api/scxanalisises/findAllByIdList",
          "PUT /api/scxanalisises"
        ]
      },
      {
        "name": "scx-atributo-asiento-controller",
        "endpoints": [
          "DELETE /api/scxatributoasientos",
          "GET /api/scxatributoasientos/findAll",
          "GET /api/scxatributoasientos/findAllByEstado/{estado}",
          "GET /api/scxatributoasientos/findByCodigo/{codigo}",
          "GET /api/scxatributoasientos/{id}",
          "POST /api/scxatributoasientos",
          "POST /api/scxatributoasientos/findAllByIdList",
          "PUT /api/scxatributoasientos"
        ]
      },
      {
        "name": "scx-codigo-reporte-contable-controller",
        "endpoints": [
          "DELETE /api/scxcodigoreportecontables",
          "GET /api/scxcodigoreportecontables/findAll",
          "GET /api/scxcodigoreportecontables/findAllByEstado/{estado}",
          "GET /api/scxcodigoreportecontables/findByCodigo/{codigo}",
          "GET /api/scxcodigoreportecontables/{id}",
          "POST /api/scxcodigoreportecontables",
          "POST /api/scxcodigoreportecontables/findAllByCodidoList",
          "POST /api/scxcodigoreportecontables/findAllByIdList",
          "PUT /api/scxcodigoreportecontables"
        ]
      },
      {
        "name": "scx-configuracion-estados-basicos-controller",
        "endpoints": [
          "DELETE /api/scxconfiguracionestadosbasicos/{id}",
          "GET /api/scxconfiguracionestadosbasicos/findAll",
          "GET /api/scxconfiguracionestadosbasicos/findAllByCodigos",
          "GET /api/scxconfiguracionestadosbasicos/findAllByEstado/{estado}",
          "GET /api/scxconfiguracionestadosbasicos/findByCodigo/{codigo}",
          "GET /api/scxconfiguracionestadosbasicos/{id}",
          "POST /api/scxconfiguracionestadosbasicos",
          "POST /api/scxconfiguracionestadosbasicos/findAllByIdList",
          "PUT /api/scxconfiguracionestadosbasicos/{id}"
        ]
      },
      {
        "name": "scx-control-registro-controller",
        "endpoints": [
          "DELETE /api/scxcontrolregistros",
          "GET /api/scxcontrolregistros/findAll",
          "GET /api/scxcontrolregistros/findAllByEstadoNgSelect/{estado}",
          "GET /api/scxcontrolregistros/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/scxcontrolregistros/findCount",
          "GET /api/scxcontrolregistros/{id}",
          "POST /api/scxcontrolregistros",
          "POST /api/scxcontrolregistros/findAllByIdList",
          "PUT /api/scxcontrolregistros"
        ]
      },
      {
        "name": "scx-cuenta-controller",
        "endpoints": [
          "DELETE /api/scxcuentas",
          "GET /api/scxcuentas/findAll",
          "GET /api/scxcuentas/findAllByEstadoNgSelect/{estado}",
          "GET /api/scxcuentas/findAllByNroCuentaLength/{nroCuentaLength}",
          "GET /api/scxcuentas/findAllByPlanCuentaVigencia/{idPlanCuentaVigencia}",
          "GET /api/scxcuentas/findAllByPlanCuentaVigenciaMaxNroPlanCuenta",
          "GET /api/scxcuentas/findAllCustom",
          "GET /api/scxcuentas/findByIdCustom/{idCuenta}",
          "GET /api/scxcuentas/findCount",
          "GET /api/scxcuentas/{id}",
          "POST /api/scxcuentas",
          "POST /api/scxcuentas/findAllByIdList",
          "POST /api/scxcuentas/findAllByNroCuentaList",
          "POST /api/scxcuentas/findAllByNroCuentaList/{idPlanCuentaVigencia}",
          "POST /api/scxcuentas/findAllByNroCuentaListAndPlanCuentaVigenciaMaxNroPlanCuenta",
          "PUT /api/scxcuentas"
        ]
      },
      {
        "name": "scx-elemento-asiento-controller",
        "endpoints": [
          "DELETE /api/scxelementoasientos",
          "GET /api/scxelementoasientos/findAll",
          "GET /api/scxelementoasientos/findAllByEstado/{estado}",
          "GET /api/scxelementoasientos/{id}",
          "POST /api/scxelementoasientos",
          "POST /api/scxelementoasientos/findAllByIdList",
          "PUT /api/scxelementoasientos"
        ]
      },
      {
        "name": "scx-elemento-cuenta-controller",
        "endpoints": [
          "DELETE /api/scxelementocuentas",
          "GET /api/scxelementocuentas/findAll",
          "GET /api/scxelementocuentas/findAllByEstadoNgSelect/{estado}",
          "GET /api/scxelementocuentas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/scxelementocuentas/findCount",
          "GET /api/scxelementocuentas/{id}",
          "POST /api/scxelementocuentas",
          "POST /api/scxelementocuentas/findAllByCodigoList",
          "POST /api/scxelementocuentas/findAllByIdList",
          "PUT /api/scxelementocuentas"
        ]
      },
      {
        "name": "scx-libro-contable-controller",
        "endpoints": [
          "DELETE /api/scxlibrocontables",
          "GET /api/scxlibrocontables/findAll",
          "GET /api/scxlibrocontables/findAllByEstado/{estado}",
          "GET /api/scxlibrocontables/{id}",
          "POST /api/scxlibrocontables",
          "POST /api/scxlibrocontables/findAllByIdList",
          "PUT /api/scxlibrocontables"
        ]
      },
      {
        "name": "scx-modelo-asiento-controller",
        "endpoints": [
          "DELETE /api/scxmodeloasientos",
          "GET /api/scxmodeloasientos/findAll",
          "GET /api/scxmodeloasientos/{id}",
          "POST /api/scxmodeloasientos",
          "PUT /api/scxmodeloasientos"
        ]
      },
      {
        "name": "scx-plan-cuenta-vigencia-controller",
        "endpoints": [
          "DELETE /api/scxplancuentavigencias",
          "GET /api/scxplancuentavigencias/findAll",
          "GET /api/scxplancuentavigencias/findAllByFchFin",
          "GET /api/scxplancuentavigencias/findByMaxNroPlanCuenta",
          "GET /api/scxplancuentavigencias/{id}",
          "POST /api/scxplancuentavigencias",
          "PUT /api/scxplancuentavigencias"
        ]
      },
      {
        "name": "scx-tipo-asiento-atributo-asiento-controller",
        "endpoints": [
          "DELETE /api/scxtipoasientoatributoasientos",
          "GET /api/scxtipoasientoatributoasientos/findAllByCodigoTipoAsiento/{codigoTipoAsiento}",
          "GET /api/scxtipoasientoatributoasientos/findAllByIdTipoAsientoNgSelect/{idTipoAsiento}",
          "POST /api/scxtipoasientoatributoasientos",
          "POST /api/scxtipoasientoatributoasientos/insertAndDeleteAllCustom",
          "PUT /api/scxtipoasientoatributoasientos"
        ]
      },
      {
        "name": "scx-tipo-asiento-controller",
        "endpoints": [
          "DELETE /api/scxtipoasientos",
          "GET /api/scxtipoasientos/findAll",
          "GET /api/scxtipoasientos/findAllByEstado/{estado}",
          "GET /api/scxtipoasientos/{id}",
          "POST /api/scxtipoasientos",
          "PUT /api/scxtipoasientos"
        ]
      },
      {
        "name": "scx-tipo-asiento-elemento-asiento-controller",
        "endpoints": [
          "DELETE /api/scxtipoasientoelementoasientos",
          "GET /api/scxtipoasientoelementoasientos/findAllByCodigoTipoAsiento/{codigoTipoAsiento}",
          "GET /api/scxtipoasientoelementoasientos/findAllByIdTipoAsientoNgSelect/{idTipoAsiento}",
          "POST /api/scxtipoasientoelementoasientos",
          "POST /api/scxtipoasientoelementoasientos/findAllByCodigoListTipoAsiento",
          "POST /api/scxtipoasientoelementoasientos/insertAndDeleteAllCustom",
          "PUT /api/scxtipoasientoelementoasientos"
        ]
      },
      {
        "name": "scx-tipo-cuenta-controller",
        "endpoints": [
          "DELETE /api/scxtipocuentas",
          "GET /api/scxtipocuentas/findAll",
          "GET /api/scxtipocuentas/findAllByEstadoNgSelect/{estado}",
          "GET /api/scxtipocuentas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/scxtipocuentas/findCount",
          "GET /api/scxtipocuentas/{id}",
          "POST /api/scxtipocuentas",
          "POST /api/scxtipocuentas/findAllByIdList",
          "PUT /api/scxtipocuentas"
        ]
      },
      {
        "name": "scx-tipo-estado-asiento-controller",
        "endpoints": [
          "DELETE /api/scxtipoestadoasientos",
          "GET /api/scxtipoestadoasientos/findAll",
          "GET /api/scxtipoestadoasientos/findAllByEstado/{estado}",
          "GET /api/scxtipoestadoasientos/findByCodigo/{codigo}",
          "GET /api/scxtipoestadoasientos/{id}",
          "POST /api/scxtipoestadoasientos",
          "POST /api/scxtipoestadoasientos/findAllByIdList",
          "PUT /api/scxtipoestadoasientos"
        ]
      },
      {
        "name": "scx-tipo-estado-declaracion-controller",
        "endpoints": [
          "DELETE /api/scxtipoestadodeclaraciones",
          "GET /api/scxtipoestadodeclaraciones/findAllByEstado/{estado}",
          "GET /api/scxtipoestadodeclaraciones/findByCodigo/{codigo}",
          "GET /api/scxtipoestadodeclaraciones/{id}",
          "POST /api/scxtipoestadodeclaraciones",
          "POST /api/scxtipoestadodeclaraciones/findAllByCodigoList",
          "POST /api/scxtipoestadodeclaraciones/findAllByIdList",
          "PUT /api/scxtipoestadodeclaraciones"
        ]
      },
      {
        "name": "scx-tipo-relacion-cuenta-concepto-controller",
        "endpoints": [
          "DELETE /api/scxtiporelacioncuentaconceptos",
          "GET /api/scxtiporelacioncuentaconceptos/findAll",
          "GET /api/scxtiporelacioncuentaconceptos/findAllByEstado/{estado}",
          "GET /api/scxtiporelacioncuentaconceptos/findByCodigo/{codigo}",
          "GET /api/scxtiporelacioncuentaconceptos/{id}",
          "POST /api/scxtiporelacioncuentaconceptos",
          "POST /api/scxtiporelacioncuentaconceptos/findAllByCodigoList",
          "PUT /api/scxtiporelacioncuentaconceptos"
        ]
      },
      {
        "name": "sde-condicion-carga-controller",
        "endpoints": [
          "DELETE /api/sdecondicioncargas",
          "GET /api/sdecondicioncargas/findAll",
          "GET /api/sdecondicioncargas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sdecondicioncargas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sdecondicioncargas/findCount",
          "GET /api/sdecondicioncargas/{id}",
          "POST /api/sdecondicioncargas",
          "POST /api/sdecondicioncargas/findAllByIdList",
          "PUT /api/sdecondicioncargas"
        ]
      },
      {
        "name": "sde-tipo-carga-controller",
        "endpoints": [
          "DELETE /api/sdetipocargas",
          "GET /api/sdetipocargas/findAll",
          "GET /api/sdetipocargas/findAllByEstadoNgSelect/{estado}",
          "GET /api/sdetipocargas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/sdetipocargas/{id}",
          "POST /api/sdetipocargas",
          "POST /api/sdetipocargas/findAllByIdList",
          "PUT /api/sdetipocargas"
        ]
      },
      {
        "name": "sde-tipo-estado-documento-inventario-controller",
        "endpoints": [
          "DELETE /api/sdetipoestadodocumentoinventarios",
          "GET /api/sdetipoestadodocumentoinventarios/findAll",
          "GET /api/sdetipoestadodocumentoinventarios/findAllByEstado/{estado}",
          "GET /api/sdetipoestadodocumentoinventarios/findByCodigo/{codigo}",
          "GET /api/sdetipoestadodocumentoinventarios/{id}",
          "POST /api/sdetipoestadodocumentoinventarios",
          "PUT /api/sdetipoestadodocumentoinventarios"
        ]
      },
      {
        "name": "sde-tipo-estado-ingreso-vehiculo-controller",
        "endpoints": [
          "DELETE /api/sdetipoestadoingresovehiculos",
          "GET /api/sdetipoestadoingresovehiculos/findAll",
          "GET /api/sdetipoestadoingresovehiculos/findByCodigo/{codigo}",
          "GET /api/sdetipoestadoingresovehiculos/{id}",
          "POST /api/sdetipoestadoingresovehiculos",
          "PUT /api/sdetipoestadoingresovehiculos"
        ]
      },
      {
        "name": "sde-tipo-estado-recepcion-mercancia-controller",
        "endpoints": [
          "DELETE /api/sdetipoestadorecepcionmercancias",
          "GET /api/sdetipoestadorecepcionmercancias/findAll",
          "GET /api/sdetipoestadorecepcionmercancias/findByCodigo/{codigo}",
          "GET /api/sdetipoestadorecepcionmercancias/{id}",
          "POST /api/sdetipoestadorecepcionmercancias",
          "PUT /api/sdetipoestadorecepcionmercancias"
        ]
      },
      {
        "name": "sde-tipo-estado-volante-despacho-controller",
        "endpoints": [
          "DELETE /api/sdetipoestadovolantedespachos",
          "GET /api/sdetipoestadovolantedespachos/findAll",
          "GET /api/sdetipoestadovolantedespachos/findAllByEstado/{estado}",
          "GET /api/sdetipoestadovolantedespachos/findByCodigo/{codigo}",
          "GET /api/sdetipoestadovolantedespachos/{id}",
          "POST /api/sdetipoestadovolantedespachos",
          "PUT /api/sdetipoestadovolantedespachos"
        ]
      },
      {
        "name": "sdo-tipo-emision-controller",
        "endpoints": [
          "DELETE /api/sdotipoemisiones",
          "GET /api/sdotipoemisiones/findAllByIdSistema/{idSistema}",
          "GET /api/sdotipoemisiones/{id}",
          "POST /api/sdotipoemisiones",
          "PUT /api/sdotipoemisiones"
        ]
      },
      {
        "name": "sgd-atributo-controller",
        "endpoints": [
          "DELETE /api/sgdatributos",
          "GET /api/sgdatributos/findAll",
          "GET /api/sgdatributos/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgdatributos/{id}",
          "POST /api/sgdatributos",
          "POST /api/sgdatributos/findAllByCodigoList",
          "POST /api/sgdatributos/findAllByIdList",
          "POST /api/sgdatributos/insertCustom",
          "POST /api/sgdatributos/updateCustom",
          "PUT /api/sgdatributos"
        ]
      },
      {
        "name": "sgd-atributo-sistema-controller",
        "endpoints": [
          "DELETE /api/sgdatributosistemas",
          "GET /api/sgdatributosistemas/findAll",
          "GET /api/sgdatributosistemas/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/sgdatributosistemas/findAllByIdAtributo/{idAtributo}",
          "GET /api/sgdatributosistemas/findByObjetoLlaveAndCodigoSistema/{objetoLlave}/{codigoSistema}",
          "GET /api/sgdatributosistemas/{sgdAtributo}/{sciSistema}",
          "POST /api/sgdatributosistemas",
          "POST /api/sgdatributosistemas/findAllSgdAtributoByIdSistemaList",
          "POST /api/sgdatributosistemas/getAtributosCustomByCodigoAndObject/{codigo}",
          "PUT /api/sgdatributosistemas"
        ]
      },
      {
        "name": "sgr-entidad-autorizante-traslado-controller",
        "endpoints": [
          "DELETE /api/sgrentidadautorizantetraslados",
          "GET /api/sgrentidadautorizantetraslados/findAll",
          "GET /api/sgrentidadautorizantetraslados/findAllByEstado/{estado}",
          "GET /api/sgrentidadautorizantetraslados/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgrentidadautorizantetraslados/findByCodigo/{codigo}",
          "GET /api/sgrentidadautorizantetraslados/{id}",
          "POST /api/sgrentidadautorizantetraslados",
          "POST /api/sgrentidadautorizantetraslados/findAllByCodigoList",
          "POST /api/sgrentidadautorizantetraslados/findAllByIdList",
          "PUT /api/sgrentidadautorizantetraslados"
        ]
      },
      {
        "name": "sgr-estructura-gtin-controller",
        "endpoints": [
          "DELETE /api/sgrestructuragtines",
          "GET /api/sgrestructuragtines/findAll",
          "GET /api/sgrestructuragtines/findAllByEstado/{estado}",
          "GET /api/sgrestructuragtines/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgrestructuragtines/{id}",
          "POST /api/sgrestructuragtines",
          "POST /api/sgrestructuragtines/findAllByIdList",
          "PUT /api/sgrestructuragtines"
        ]
      },
      {
        "name": "sgr-pagador-flete-controller",
        "endpoints": [
          "DELETE /api/sgrpagadorfletes",
          "GET /api/sgrpagadorfletes/findAll",
          "GET /api/sgrpagadorfletes/findAllByEstado/{estado}",
          "GET /api/sgrpagadorfletes/findAllByEstadoNgSelect/{estado}",
          "GET /api/sgrpagadorfletes/findCount",
          "GET /api/sgrpagadorfletes/{id}",
          "POST /api/sgrpagadorfletes",
          "POST /api/sgrpagadorfletes/findAllByIdList",
          "PUT /api/sgrpagadorfletes"
        ]
      },
      {
        "name": "sgr-tipo-estado-guia-remision-controller",
        "endpoints": [
          "DELETE /api/sgrtipoestadoguiaremisiones",
          "GET /api/sgrtipoestadoguiaremisiones/findAll",
          "GET /api/sgrtipoestadoguiaremisiones/findAllByEstado/{estado}",
          "GET /api/sgrtipoestadoguiaremisiones/findByCodigo/{codigo}",
          "GET /api/sgrtipoestadoguiaremisiones/{id}",
          "POST /api/sgrtipoestadoguiaremisiones",
          "POST /api/sgrtipoestadoguiaremisiones/findAllByIdList",
          "PUT /api/sgrtipoestadoguiaremisiones"
        ]
      },
      {
        "name": "sle-grupo-declaracion-controller",
        "endpoints": [
          "DELETE /api/slegrupodeclaraciones",
          "GET /api/slegrupodeclaraciones/findAll",
          "GET /api/slegrupodeclaraciones/findAllByEstado/{estado}",
          "GET /api/slegrupodeclaraciones/findByCodigo/{codigo}",
          "GET /api/slegrupodeclaraciones/{id}",
          "POST /api/slegrupodeclaraciones",
          "PUT /api/slegrupodeclaraciones"
        ]
      },
      {
        "name": "sle-libro-electronico-controller",
        "endpoints": [
          "DELETE /api/slelibroelectronicos",
          "GET /api/slelibroelectronicos/findAll",
          "GET /api/slelibroelectronicos/findByCodigo/{codigo}",
          "GET /api/slelibroelectronicos/{id}",
          "POST /api/slelibroelectronicos",
          "PUT /api/slelibroelectronicos"
        ]
      },
      {
        "name": "sle-sistema-declaracion-controller",
        "endpoints": [
          "DELETE /api/slesistemadeclaraciones",
          "GET /api/slesistemadeclaraciones/findAll",
          "GET /api/slesistemadeclaraciones/findAllByEstado/{estado}",
          "GET /api/slesistemadeclaraciones/findAllByEstadoCustom/{estado}",
          "GET /api/slesistemadeclaraciones/findByCodigo/{codigo}",
          "GET /api/slesistemadeclaraciones/{id}",
          "POST /api/slesistemadeclaraciones",
          "PUT /api/slesistemadeclaraciones"
        ]
      },
      {
        "name": "sle-tipo-estado-comparacion-propuesta-controller",
        "endpoints": [
          "DELETE /api/sletipotstadocomparacionpropuestas",
          "GET /api/sletipotstadocomparacionpropuestas/findAll",
          "GET /api/sletipotstadocomparacionpropuestas/findAllByEstado/{estado}",
          "GET /api/sletipotstadocomparacionpropuestas/findByCodigo/{codigo}",
          "GET /api/sletipotstadocomparacionpropuestas/{id}",
          "POST /api/sletipotstadocomparacionpropuestas",
          "POST /api/sletipotstadocomparacionpropuestas/findAllByCodidoList",
          "POST /api/sletipotstadocomparacionpropuestas/findAllByIdList",
          "PUT /api/sletipotstadocomparacionpropuestas"
        ]
      },
      {
        "name": "smx-actualizacion-registro-controller",
        "endpoints": [
          "DELETE /api/smxactualizacionregistros",
          "GET /api/smxactualizacionregistros/{id}",
          "POST /api/smxactualizacionregistros",
          "PUT /api/smxactualizacionregistros"
        ]
      },
      {
        "name": "smx-sincronizacion-controller",
        "endpoints": [
          "DELETE /api/smxsincronizaciones",
          "GET /api/smxsincronizaciones/findAll",
          "GET /api/smxsincronizaciones/{id}",
          "POST /api/smxsincronizaciones",
          "PUT /api/smxsincronizaciones"
        ]
      },
      {
        "name": "str-configuracion-controller",
        "endpoints": [
          "DELETE /api/strconfiguraciones",
          "GET /api/strconfiguraciones/findAll",
          "GET /api/strconfiguraciones/{id}",
          "POST /api/strconfiguraciones",
          "POST /api/strconfiguraciones/findAllByIdList",
          "PUT /api/strconfiguraciones"
        ]
      },
      {
        "name": "str-configuracion-via-transporte-controller",
        "endpoints": [
          "DELETE /api/strconfiguracionviatransportes",
          "GET /api/strconfiguracionviatransportes/findAllIdByIdConfiguracion/{idConfiguracion}",
          "GET /api/strconfiguracionviatransportes/{strConfiguracion}/{tbViaTransporte}",
          "POST /api/strconfiguracionviatransportes",
          "POST /api/strconfiguracionviatransportes/insertAndDeleteAllCustom",
          "PUT /api/strconfiguracionviatransportes"
        ]
      },
      {
        "name": "str-ruta-referencial-nacional-controller",
        "endpoints": [
          "DELETE /api/strrutareferencialnacionales",
          "GET /api/strrutareferencialnacionales/findAll",
          "GET /api/strrutareferencialnacionales/findAllByIdVigenciaValorReferencial/{id}",
          "GET /api/strrutareferencialnacionales/{id}",
          "POST /api/strrutareferencialnacionales",
          "POST /api/strrutareferencialnacionales/findAllByIdList",
          "POST /api/strrutareferencialnacionales/findByFchCustom",
          "PUT /api/strrutareferencialnacionales",
          "PUT /api/strrutareferencialnacionales/updateCustom"
        ]
      },
      {
        "name": "str-ruta-referencial-nacional-ubicacion-referencial-controller",
        "endpoints": [
          "DELETE /api/strrutareferencialnacionalubicacionreferenciales",
          "GET /api/strrutareferencialnacionalubicacionreferenciales/findAllByIdRutaReferencialNacional/{idRutaReferencialNacional}",
          "GET /api/strrutareferencialnacionalubicacionreferenciales/findByIdRutaReferencialNacionalAndIdUbicacionReferencial/{idRutaReferencialNacional}/{idUbicacionReferencial}",
          "GET /api/strrutareferencialnacionalubicacionreferenciales/{strRutaReferencialNacional}/{strUbicacionReferencial}",
          "POST /api/strrutareferencialnacionalubicacionreferenciales",
          "PUT /api/strrutareferencialnacionalubicacionreferenciales"
        ]
      },
      {
        "name": "str-tipo-estado-orden-transporte-controller",
        "endpoints": [
          "DELETE /api/strtipoestadoordentransportes",
          "GET /api/strtipoestadoordentransportes/findAll",
          "GET /api/strtipoestadoordentransportes/findByCodigo/{codigo}",
          "GET /api/strtipoestadoordentransportes/{id}",
          "POST /api/strtipoestadoordentransportes",
          "POST /api/strtipoestadoordentransportes/findAllByCodigoList",
          "POST /api/strtipoestadoordentransportes/findAllByIdList",
          "PUT /api/strtipoestadoordentransportes"
        ]
      },
      {
        "name": "str-tipo-estado-retiro-contenedor-controller",
        "endpoints": [
          "DELETE /api/strtipoestadoretirocontenedores",
          "GET /api/strtipoestadoretirocontenedores/findAll",
          "GET /api/strtipoestadoretirocontenedores/findAllByEstado/{estado}",
          "GET /api/strtipoestadoretirocontenedores/findByCodigo/{codigo}",
          "GET /api/strtipoestadoretirocontenedores/{id}",
          "POST /api/strtipoestadoretirocontenedores",
          "POST /api/strtipoestadoretirocontenedores/findAllByCodigoList",
          "POST /api/strtipoestadoretirocontenedores/findAllByIdList",
          "PUT /api/strtipoestadoretirocontenedores"
        ]
      },
      {
        "name": "str-tipo-estado-solicitud-transporte-controller",
        "endpoints": [
          "DELETE /api/strtipoestadosolicitudtransportes",
          "GET /api/strtipoestadosolicitudtransportes/findAll",
          "GET /api/strtipoestadosolicitudtransportes/findAllByEstado/{estado}",
          "GET /api/strtipoestadosolicitudtransportes/findByCodigo/{codigo}",
          "GET /api/strtipoestadosolicitudtransportes/{id}",
          "POST /api/strtipoestadosolicitudtransportes",
          "POST /api/strtipoestadosolicitudtransportes/findAllByIdList",
          "PUT /api/strtipoestadosolicitudtransportes"
        ]
      },
      {
        "name": "str-tipo-estado-viaje-controller",
        "endpoints": [
          "DELETE /api/strtipoestadoviajes",
          "GET /api/strtipoestadoviajes/findAll",
          "GET /api/strtipoestadoviajes/findAllByEstado/{estado}",
          "GET /api/strtipoestadoviajes/findByCodigo/{codigo}",
          "GET /api/strtipoestadoviajes/{id}",
          "POST /api/strtipoestadoviajes",
          "POST /api/strtipoestadoviajes/findAllByCodigoList",
          "POST /api/strtipoestadoviajes/findAllByIdList",
          "PUT /api/strtipoestadoviajes"
        ]
      },
      {
        "name": "str-tipo-maquina-combustible-controller",
        "endpoints": [
          "DELETE /api/strtipomaquinacombustibles",
          "GET /api/strtipomaquinacombustibles/existById/{id}",
          "GET /api/strtipomaquinacombustibles/findAll",
          "GET /api/strtipomaquinacombustibles/findAllByEstado/{estado}",
          "GET /api/strtipomaquinacombustibles/findAllByEstadoNgSelect/{estado}",
          "GET /api/strtipomaquinacombustibles/{id}",
          "POST /api/strtipomaquinacombustibles",
          "POST /api/strtipomaquinacombustibles/findAllByIdList",
          "PUT /api/strtipomaquinacombustibles"
        ]
      },
      {
        "name": "str-ubicacion-referencial-controller",
        "endpoints": [
          "DELETE /api/strubicacionreferenciales",
          "GET /api/strubicacionreferenciales/findAll",
          "GET /api/strubicacionreferenciales/findAllByEstado/{estado}",
          "GET /api/strubicacionreferenciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/strubicacionreferenciales/{id}",
          "POST /api/strubicacionreferenciales",
          "POST /api/strubicacionreferenciales/findAllByIdList",
          "PUT /api/strubicacionreferenciales"
        ]
      },
      {
        "name": "str-vigencia-valor-referencial-controller",
        "endpoints": [
          "DELETE /api/strvigenciavalorreferenciales",
          "GET /api/strvigenciavalorreferenciales/findAll",
          "GET /api/strvigenciavalorreferenciales/findAllNgSelect",
          "GET /api/strvigenciavalorreferenciales/{id}",
          "POST /api/strvigenciavalorreferenciales",
          "POST /api/strvigenciavalorreferenciales/copy/{idToCopy}",
          "POST /api/strvigenciavalorreferenciales/findAllByIdList",
          "PUT /api/strvigenciavalorreferenciales"
        ]
      },
      {
        "name": "str-zona-referencial-local-controller",
        "endpoints": [
          "DELETE /api/strzonareferenciallocales",
          "GET /api/strzonareferenciallocales/findAll",
          "GET /api/strzonareferenciallocales/findAllByTbUbicacionComercialAndStrVigenciaValorReferencial/{idUbicacionComercial}/{idVigenciaValorReferencial}",
          "GET /api/strzonareferenciallocales/{id}",
          "POST /api/strzonareferenciallocales",
          "POST /api/strzonareferenciallocales/findAllByIdList",
          "POST /api/strzonareferenciallocales/findAllByIdUbicacionComercialAndFchCustom/{idUbicacionComercial}",
          "POST /api/strzonareferenciallocales/getDefaultZonaReferencial",
          "POST /api/strzonareferenciallocales/getZonasReferencialesBySearchDto",
          "PUT /api/strzonareferenciallocales",
          "PUT /api/strzonareferenciallocales/update"
        ]
      },
      {
        "name": "str-zona-referencial-local-tipo-carga-controller",
        "endpoints": [
          "DELETE /api/strzonareferenciallocaltipocargas",
          "GET /api/strzonareferenciallocaltipocargas/findAllByIdZonaReferencialLocal/{idZonaReferencialLocal}",
          "GET /api/strzonareferenciallocaltipocargas/findAllIdByIdZonaReferencialLocal/{idZonaReferencialLocal}",
          "GET /api/strzonareferenciallocaltipocargas/findByIdZonaReferencialLocalAndIdTipoCarga/{idZonaReferencialLocal}/{idTipoCarga}",
          "GET /api/strzonareferenciallocaltipocargas/{idZonaReferencialLocal}/{idTipoCarga}",
          "POST /api/strzonareferenciallocaltipocargas",
          "POST /api/strzonareferenciallocaltipocargas/findAllBySearch",
          "POST /api/strzonareferenciallocaltipocargas/insertAndDeleteAllCustom",
          "PUT /api/strzonareferenciallocaltipocargas"
        ]
      },
      {
        "name": "str-zona-referencial-local-ubicacion-geografica-precision-controller",
        "endpoints": [
          "DELETE /api/strzonareferenciallocalubicaciongeograficaprecisiones",
          "GET /api/strzonareferenciallocalubicaciongeograficaprecisiones/findAllByIdUbicacionComercial/{idUbicacionComercial}",
          "GET /api/strzonareferenciallocalubicaciongeograficaprecisiones/findAllByIdZonaReferencialLocal/{idZonaReferencialLocal}",
          "GET /api/strzonareferenciallocalubicaciongeograficaprecisiones/findAllIdByIdZonaReferencialLocal/{idZonaReferencialLocal}",
          "GET /api/strzonareferenciallocalubicaciongeograficaprecisiones/{id}",
          "POST /api/strzonareferenciallocalubicaciongeograficaprecisiones",
          "PUT /api/strzonareferenciallocalubicaciongeograficaprecisiones"
        ]
      },
      {
        "name": "sve-comprobante-electronico-configuracion-prueba-controller",
        "endpoints": [
          "DELETE /api/svecomprobanteelectronicoconfiguracionpruebas",
          "GET /api/svecomprobanteelectronicoconfiguracionpruebas/{id}",
          "POST /api/svecomprobanteelectronicoconfiguracionpruebas",
          "POST /api/svecomprobanteelectronicoconfiguracionpruebas/findAllByIdList",
          "PUT /api/svecomprobanteelectronicoconfiguracionpruebas"
        ]
      },
      {
        "name": "sve-configuracion-sunat-prueba-controller",
        "endpoints": [
          "DELETE /api/sveconfiguracionsunatpruebas",
          "GET /api/sveconfiguracionsunatpruebas/findAll",
          "GET /api/sveconfiguracionsunatpruebas/{id}",
          "POST /api/sveconfiguracionsunatpruebas",
          "POST /api/sveconfiguracionsunatpruebas/findAllByIdList",
          "PUT /api/sveconfiguracionsunatpruebas"
        ]
      },
      {
        "name": "sve-descuento-cargo-controller",
        "endpoints": [
          "DELETE /api/svedescuentocargos",
          "GET /api/svedescuentocargos/findAll",
          "GET /api/svedescuentocargos/findAllByIdList",
          "GET /api/svedescuentocargos/{id}",
          "POST /api/svedescuentocargos",
          "PUT /api/svedescuentocargos"
        ]
      },
      {
        "name": "sve-documento-relacionado-controller",
        "endpoints": [
          "DELETE /api/svedocumentorelacionados",
          "GET /api/svedocumentorelacionados/findAll",
          "GET /api/svedocumentorelacionados/findAllByEstado/{estado}",
          "GET /api/svedocumentorelacionados/{id}",
          "POST /api/svedocumentorelacionados",
          "PUT /api/svedocumentorelacionados"
        ]
      },
      {
        "name": "sve-estado-controller",
        "endpoints": [
          "DELETE /api/sveestados",
          "GET /api/sveestados/findAll",
          "GET /api/sveestados/findByCodigo/{codigo}",
          "GET /api/sveestados/{id}",
          "POST /api/sveestados",
          "POST /api/sveestados/findAllByCodigoList",
          "POST /api/sveestados/findAllByIdList",
          "PUT /api/sveestados"
        ]
      },
      {
        "name": "sve-motivo-controller",
        "endpoints": [
          "DELETE /api/svemotivos",
          "DELETE /api/svemotivos/deleteAll",
          "GET /api/svemotivos/findAll",
          "GET /api/svemotivos/findAllByIdTipoComprobanteAndIdTipoComprobanteAfecto/{idTipoComprobante}/{idTipoComprobanteAfecto}",
          "GET /api/svemotivos/findByIdTipoComprobanteAndCodigo/{idTipoComprobante}/{codigo}",
          "GET /api/svemotivos/{id}",
          "POST /api/svemotivos",
          "POST /api/svemotivos/findAllByCodigoList",
          "POST /api/svemotivos/findAllByIdList",
          "PUT /api/svemotivos"
        ]
      },
      {
        "name": "sve-motivo-tipo-comprobante-controller",
        "endpoints": [
          "DELETE /api/svemotivotipocomprobantes",
          "GET /api/svemotivotipocomprobantes/findAllByIdMotivo/{idMotivo}",
          "GET /api/svemotivotipocomprobantes/{sveMotivo}/{tbTipoComprobante}",
          "POST /api/svemotivotipocomprobantes",
          "POST /api/svemotivotipocomprobantes/insertAndDeleteAllCustom",
          "PUT /api/svemotivotipocomprobantes"
        ]
      },
      {
        "name": "sve-origen-orden-venta-controller",
        "endpoints": [
          "DELETE /api/sveorigenordenventas",
          "GET /api/sveorigenordenventas/findAll",
          "GET /api/sveorigenordenventas/findAllByEstado/{estado}",
          "GET /api/sveorigenordenventas/findByCodigo/{codigo}",
          "GET /api/sveorigenordenventas/{id}",
          "POST /api/sveorigenordenventas",
          "POST /api/sveorigenordenventas/findAllByCodigoList",
          "POST /api/sveorigenordenventas/findAllByIdList",
          "PUT /api/sveorigenordenventas"
        ]
      },
      {
        "name": "sve-tipo-comprobante-documento-relacionado-controller",
        "endpoints": [
          "DELETE /api/svetipocomprobantedocumentorelacionados",
          "GET /api/svetipocomprobantedocumentorelacionados/findAllIdByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/svetipocomprobantedocumentorelacionados/findAllSveDocumentoRelacionadoByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/svetipocomprobantedocumentorelacionados/{tbTipoComprobante}/{sveDocumentoRelacionado}",
          "POST /api/svetipocomprobantedocumentorelacionados",
          "POST /api/svetipocomprobantedocumentorelacionados/insertAndDeleteAllCustom",
          "PUT /api/svetipocomprobantedocumentorelacionados"
        ]
      },
      {
        "name": "sve-tipo-comprobante-tipo-comprobante-afecto-controller",
        "endpoints": [
          "DELETE /api/svetipocomprobantetipocomprobanteafectos",
          "GET /api/svetipocomprobantetipocomprobanteafectos/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/svetipocomprobantetipocomprobanteafectos/findAllTbTipoComprobanteAfectoByIdTipoComprobanteNgSelect/{idTipoComprobante}",
          "GET /api/svetipocomprobantetipocomprobanteafectos/{tbTipoComprobante}/{tbTipoComprobanteAfecto}",
          "POST /api/svetipocomprobantetipocomprobanteafectos",
          "POST /api/svetipocomprobantetipocomprobanteafectos/insertAndDeleteAllCustom",
          "PUT /api/svetipocomprobantetipocomprobanteafectos"
        ]
      },
      {
        "name": "sve-tipo-comprobante-tipo-relacion-controller",
        "endpoints": [
          "DELETE /api/svetipocomprobantetiporelaciones",
          "GET /api/svetipocomprobantetiporelaciones/findAllByIdTipoComprobanteNgSelect/{idTipoComprobante}",
          "GET /api/svetipocomprobantetiporelaciones/{tbTipoComprobante}/{sveTipoRelacion}",
          "POST /api/svetipocomprobantetiporelaciones",
          "POST /api/svetipocomprobantetiporelaciones/insertAndDeleteAllCustom",
          "PUT /api/svetipocomprobantetiporelaciones"
        ]
      },
      {
        "name": "sve-tipo-comprobante-tipo-venta-controller",
        "endpoints": [
          "DELETE /api/svetipocomprobantetipoventas",
          "GET /api/svetipocomprobantetipoventas/findAllByIdTipoComprobanteNgSelect/{idTipoComprobante}",
          "GET /api/svetipocomprobantetipoventas/findAllByIdTipoVentaNgSelect/{idTipoVenta}",
          "GET /api/svetipocomprobantetipoventas/{tbTipoComprobante}/{sveTipoVenta}",
          "POST /api/svetipocomprobantetipoventas",
          "POST /api/svetipocomprobantetipoventas/insertAndDeleteAllCustom",
          "PUT /api/svetipocomprobantetipoventas"
        ]
      },
      {
        "name": "sve-tipo-comprobante-venta-documento-controller",
        "endpoints": [
          "DELETE /api/svetipocomprobanteventadocumentos",
          "GET /api/svetipocomprobanteventadocumentos/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/svetipocomprobanteventadocumentos/findAllByIdTipoComprobantePK/{idTipoComprobante}",
          "GET /api/svetipocomprobanteventadocumentos/findAllByIdTipoDocumento/{idTipoDocumento}",
          "GET /api/svetipocomprobanteventadocumentos/findAllByIdTipoVenta/{idTipoVenta}",
          "GET /api/svetipocomprobanteventadocumentos/findAllSveTipoVenta",
          "GET /api/svetipocomprobanteventadocumentos/findAllSveTipoVentaByIdTipoComprobanteAndIdTipoDocumento/{idTipoComprobante}/{idTipoDocumento}",
          "GET /api/svetipocomprobanteventadocumentos/{tbTipoComprobante}/{sveTipoVenta}/{tbTipoDocumento}",
          "POST /api/svetipocomprobanteventadocumentos",
          "POST /api/svetipocomprobanteventadocumentos/insertAndDeleteAllCustom",
          "PUT /api/svetipocomprobanteventadocumentos"
        ]
      },
      {
        "name": "sve-tipo-estado-financiamiento-controller",
        "endpoints": [
          "DELETE /api/svetipoestadofinanciamientos",
          "GET /api/svetipoestadofinanciamientos/findAll",
          "GET /api/svetipoestadofinanciamientos/findAllByEstado/{estado}",
          "GET /api/svetipoestadofinanciamientos/findByCodigo/{codigo}",
          "GET /api/svetipoestadofinanciamientos/{id}",
          "POST /api/svetipoestadofinanciamientos",
          "POST /api/svetipoestadofinanciamientos/findAllByIdList",
          "PUT /api/svetipoestadofinanciamientos"
        ]
      },
      {
        "name": "sve-tipo-estado-financiamiento-detalle-controller",
        "endpoints": [
          "DELETE /api/svetipoestadofinanciamientodetalles",
          "GET /api/svetipoestadofinanciamientodetalles/findAll",
          "GET /api/svetipoestadofinanciamientodetalles/findAllByEstado/{estado}",
          "GET /api/svetipoestadofinanciamientodetalles/findByCodigo/{codigo}",
          "GET /api/svetipoestadofinanciamientodetalles/{id}",
          "POST /api/svetipoestadofinanciamientodetalles",
          "POST /api/svetipoestadofinanciamientodetalles/findAllByCodigoList",
          "POST /api/svetipoestadofinanciamientodetalles/findAllByIdList",
          "PUT /api/svetipoestadofinanciamientodetalles"
        ]
      },
      {
        "name": "sve-tipo-estado-liquidacion-controller",
        "endpoints": [
          "DELETE /api/svetipoestadoliquidaciones",
          "GET /api/svetipoestadoliquidaciones/findAll",
          "GET /api/svetipoestadoliquidaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/svetipoestadoliquidaciones/findByCodigo/{codigo}",
          "GET /api/svetipoestadoliquidaciones/{id}",
          "POST /api/svetipoestadoliquidaciones",
          "POST /api/svetipoestadoliquidaciones/findAllByCodigoList",
          "POST /api/svetipoestadoliquidaciones/findAllByIdList",
          "PUT /api/svetipoestadoliquidaciones"
        ]
      },
      {
        "name": "sve-tipo-estado-orden-venta-controller",
        "endpoints": [
          "DELETE /api/svetipoestadoordenventas",
          "GET /api/svetipoestadoordenventas/findAll",
          "GET /api/svetipoestadoordenventas/findAllByEstado/{estado}",
          "GET /api/svetipoestadoordenventas/findByCodigo/{codigo}",
          "GET /api/svetipoestadoordenventas/{id}",
          "POST /api/svetipoestadoordenventas",
          "POST /api/svetipoestadoordenventas/findAllByCodigoList",
          "POST /api/svetipoestadoordenventas/findAllByIdList",
          "PUT /api/svetipoestadoordenventas"
        ]
      },
      {
        "name": "sve-tipo-estado-orden-venta-detalle-controller",
        "endpoints": [
          "GET /api/svetipoestadoordenventadetalles/findByCodigo/{codigo}",
          "POST /api/svetipoestadoordenventadetalles/findAllByCodigoList",
          "POST /api/svetipoestadoordenventadetalles/findAllByIdList"
        ]
      },
      {
        "name": "sve-tipo-financiamiento-controller",
        "endpoints": [
          "DELETE /api/svetipofinanciamientos",
          "GET /api/svetipofinanciamientos/findAll",
          "GET /api/svetipofinanciamientos/findAllByEstado/{estado}",
          "GET /api/svetipofinanciamientos/findByCodigo/{codigo}",
          "GET /api/svetipofinanciamientos/{id}",
          "POST /api/svetipofinanciamientos",
          "POST /api/svetipofinanciamientos/findAllByIdList",
          "PUT /api/svetipofinanciamientos"
        ]
      },
      {
        "name": "sve-tipo-interes-controller",
        "endpoints": [
          "DELETE /api/svetipointereses",
          "GET /api/svetipointereses/findAll",
          "GET /api/svetipointereses/findAllByEstado/{estado}",
          "GET /api/svetipointereses/findByCodigo/{codigo}",
          "GET /api/svetipointereses/{id}",
          "POST /api/svetipointereses",
          "POST /api/svetipointereses/findAllByIdList",
          "PUT /api/svetipointereses"
        ]
      },
      {
        "name": "sve-tipo-orden-venta-controller",
        "endpoints": [
          "DELETE /api/svetipoordenventas",
          "GET /api/svetipoordenventas/findAllByEstado/{estado}",
          "GET /api/svetipoordenventas/findByCodigo/{codigo}",
          "GET /api/svetipoordenventas/{id}",
          "POST /api/svetipoordenventas",
          "POST /api/svetipoordenventas/findAllByCodigoList",
          "POST /api/svetipoordenventas/findAllByIdList",
          "PUT /api/svetipoordenventas"
        ]
      },
      {
        "name": "sve-tipo-relacion-controller",
        "endpoints": [
          "DELETE /api/svetiporelaciones",
          "GET /api/svetiporelaciones/findAll",
          "GET /api/svetiporelaciones/findAllByEstado/{estado}",
          "GET /api/svetiporelaciones/findByCodigo/{codigo}",
          "GET /api/svetiporelaciones/{id}",
          "POST /api/svetiporelaciones",
          "POST /api/svetiporelaciones/findAllByIdList",
          "PUT /api/svetiporelaciones"
        ]
      },
      {
        "name": "sve-tipo-venta-controller",
        "endpoints": [
          "DELETE /api/svetipoventas",
          "GET /api/svetipoventas/findAll",
          "GET /api/svetipoventas/findAllByEstado/{estado}",
          "GET /api/svetipoventas/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/svetipoventas/findByCodigo/{codigo}",
          "GET /api/svetipoventas/{id}",
          "POST /api/svetipoventas",
          "POST /api/svetipoventas/findAllByIdList",
          "PUT /api/svetipoventas"
        ]
      },
      {
        "name": "sve-tipo-venta-tipo-afectacion-controller",
        "endpoints": [
          "DELETE /api/svetipoventatipoafectaciones",
          "GET /api/svetipoventatipoafectaciones/findAllByIdTipoVentaNgSelect/{idTipoVenta}",
          "GET /api/svetipoventatipoafectaciones/{sveTipoVenta}/{tbTipoAfectacion}",
          "POST /api/svetipoventatipoafectaciones",
          "POST /api/svetipoventatipoafectaciones/findAllTbTipoAfectacionCustomByIdTipoVentaList",
          "POST /api/svetipoventatipoafectaciones/insertAndDeleteAllCustom",
          "PUT /api/svetipoventatipoafectaciones"
        ]
      },
      {
        "name": "tb-accion-evento-interno-controller",
        "endpoints": [
          "DELETE /api/tbaccioneventointernos",
          "GET /api/tbaccioneventointernos/findAll",
          "GET /api/tbaccioneventointernos/findAllByIdEventoInterno/{idEventoInterno}",
          "GET /api/tbaccioneventointernos/{id}",
          "POST /api/tbaccioneventointernos",
          "POST /api/tbaccioneventointernos/findAllByIdList",
          "PUT /api/tbaccioneventointernos"
        ]
      },
      {
        "name": "tb-actividad-economica-controller",
        "endpoints": [
          "DELETE /api/tbactividadeconomicas",
          "GET /api/tbactividadeconomicas/existById/{id}",
          "GET /api/tbactividadeconomicas/findAll",
          "GET /api/tbactividadeconomicas/findAllByEstado/{estado}",
          "GET /api/tbactividadeconomicas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbactividadeconomicas/findByCodigo/{codigo}",
          "GET /api/tbactividadeconomicas/{id}",
          "POST /api/tbactividadeconomicas",
          "POST /api/tbactividadeconomicas/findAllByCodigoList",
          "POST /api/tbactividadeconomicas/findAllByIdList",
          "PUT /api/tbactividadeconomicas"
        ]
      },
      {
        "name": "tb-aduana-controller",
        "endpoints": [
          "DELETE /api/tbaduanas",
          "GET /api/tbaduanas/existById/{id}",
          "GET /api/tbaduanas/findAll",
          "GET /api/tbaduanas/findAllByEstado/{estado}",
          "GET /api/tbaduanas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbaduanas/findAllCustom",
          "GET /api/tbaduanas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbaduanas/{id}",
          "POST /api/tbaduanas",
          "POST /api/tbaduanas/findAllByCodigoList",
          "POST /api/tbaduanas/findAllByIdList",
          "POST /api/tbaduanas/insertWithViaTransporteList",
          "POST /api/tbaduanas/updateWithViaTransporteList",
          "PUT /api/tbaduanas"
        ]
      },
      {
        "name": "tb-aduana-via-transporte-controller",
        "endpoints": [
          "DELETE /api/tbaduanaviatransportes",
          "GET /api/tbaduanaviatransportes/findAllByIdAduana/{idAduana}",
          "GET /api/tbaduanaviatransportes/findAllByIdViaTransporte/{idViaTransporte}",
          "GET /api/tbaduanaviatransportes/findAllIdByIdAduana/{idAduana}",
          "GET /api/tbaduanaviatransportes/{tbAduana}/{tbViaTransporte}",
          "POST /api/tbaduanaviatransportes",
          "POST /api/tbaduanaviatransportes/insertAndDeleteAllCustom",
          "PUT /api/tbaduanaviatransportes"
        ]
      },
      {
        "name": "tb-agente-carga-controller",
        "endpoints": [
          "DELETE /api/tbagentecargas",
          "GET /api/tbagentecargas/findAllByEstado/{estado}",
          "GET /api/tbagentecargas/{id}",
          "POST /api/tbagentecargas",
          "POST /api/tbagentecargas/insertListWithJSONFile",
          "PUT /api/tbagentecargas"
        ]
      },
      {
        "name": "tb-agente-maritimo-controller",
        "endpoints": [
          "DELETE /api/tbagentemaritimos",
          "GET /api/tbagentemaritimos/findAllByEstado/{estado}",
          "GET /api/tbagentemaritimos/{id}",
          "POST /api/tbagentemaritimos",
          "POST /api/tbagentemaritimos/insertListWithJSONFile",
          "PUT /api/tbagentemaritimos"
        ]
      },
      {
        "name": "tb-alineacion-texto-controller",
        "endpoints": [
          "DELETE /api/tbalineaciontextos",
          "GET /api/tbalineaciontextos/existById/{id}",
          "GET /api/tbalineaciontextos/findAll",
          "GET /api/tbalineaciontextos/findAllByEstado/{estado}",
          "GET /api/tbalineaciontextos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbalineaciontextos/findByCodigo/{codigo}",
          "GET /api/tbalineaciontextos/{id}",
          "POST /api/tbalineaciontextos",
          "POST /api/tbalineaciontextos/findAllByIdList",
          "PUT /api/tbalineaciontextos"
        ]
      },
      {
        "name": "tb-banco-controller",
        "endpoints": [
          "DELETE /api/tbbancos",
          "GET /api/tbbancos/existById/{id}",
          "GET /api/tbbancos/findAll",
          "GET /api/tbbancos/findAllByEstado/{estado}",
          "GET /api/tbbancos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbbancos/findByCodigo/{codigo}",
          "GET /api/tbbancos/{id}",
          "POST /api/tbbancos",
          "POST /api/tbbancos/findAllByCodigoList",
          "POST /api/tbbancos/findAllByIdList",
          "POST /api/tbbancos/insert",
          "POST /api/tbbancos/update",
          "PUT /api/tbbancos"
        ]
      },
      {
        "name": "tb-base-legal-infraccion-controller",
        "endpoints": [
          "DELETE /api/tbbaselegalinfracciones",
          "GET /api/tbbaselegalinfracciones/findAllByEstado/{estado}",
          "GET /api/tbbaselegalinfracciones/{id}",
          "POST /api/tbbaselegalinfracciones",
          "POST /api/tbbaselegalinfracciones/findAllByIdList",
          "PUT /api/tbbaselegalinfracciones"
        ]
      },
      {
        "name": "tb-base-legal-infraccion-rebaja-lineamiento-controller",
        "endpoints": [
          "DELETE /api/tbbaselegalinfraccionrebajalineamientos",
          "GET /api/tbbaselegalinfraccionrebajalineamientos/findAllByBaseLegalInfraccionEstado/{estado}",
          "GET /api/tbbaselegalinfraccionrebajalineamientos/findAllByRebajaLineamientoEstado/{estado}",
          "GET /api/tbbaselegalinfraccionrebajalineamientos/{tbBaseLegalInfraccion}/{tbRebajaLineamiento}",
          "POST /api/tbbaselegalinfraccionrebajalineamientos",
          "PUT /api/tbbaselegalinfraccionrebajalineamientos"
        ]
      },
      {
        "name": "tb-bien-servicio-controller",
        "endpoints": [
          "DELETE /api/tbbienservicios",
          "GET /api/tbbienservicios/existByCodigo/{codigo}",
          "GET /api/tbbienservicios/existById/{id}",
          "GET /api/tbbienservicios/findAll",
          "GET /api/tbbienservicios/findAllByEstado/{estado}",
          "GET /api/tbbienservicios/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbbienservicios/findAllIdByCtrlTransporte/{ctrlTransporte}",
          "GET /api/tbbienservicios/findByCodigo/{codigo}",
          "GET /api/tbbienservicios/{id}",
          "POST /api/tbbienservicios",
          "POST /api/tbbienservicios/findAllByCodigoList",
          "POST /api/tbbienservicios/findAllByIdList",
          "POST /api/tbbienservicios/findAllBySearch",
          "PUT /api/tbbienservicios"
        ]
      },
      {
        "name": "tb-bien-servicio-porcentaje-controller",
        "endpoints": [
          "DELETE /api/tbbienservicioporcentajes",
          "GET /api/tbbienservicioporcentajes/existById/{idBienServicioVigencia}/{idBienServicio}",
          "GET /api/tbbienservicioporcentajes/findAll",
          "GET /api/tbbienservicioporcentajes/{tbBienServicioVigencia}/{tbBienServicio}",
          "POST /api/tbbienservicioporcentajes",
          "POST /api/tbbienservicioporcentajes/findAllByIdBienServicioVigenciaAndIdBienServicioList/{idBienServicioVigencia}",
          "POST /api/tbbienservicioporcentajes/findAllByTbBienServicioCodigoList",
          "POST /api/tbbienservicioporcentajes/findByTbBienServicioVigencia",
          "POST /api/tbbienservicioporcentajes/insertAll",
          "POST /api/tbbienservicioporcentajes/update",
          "PUT /api/tbbienservicioporcentajes"
        ]
      },
      {
        "name": "tb-bien-servicio-vigencia-controller",
        "endpoints": [
          "DELETE /api/tbbienserviciovigencias",
          "DELETE /api/tbbienserviciovigencias/delete",
          "GET /api/tbbienserviciovigencias/existById/{id}",
          "GET /api/tbbienserviciovigencias/findAllByFchDetraccion/{fchDetraccion}",
          "GET /api/tbbienserviciovigencias/{id}",
          "POST /api/tbbienserviciovigencias",
          "POST /api/tbbienserviciovigencias/findAllByFilter",
          "POST /api/tbbienserviciovigencias/findAllByIdList",
          "POST /api/tbbienserviciovigencias/searchByDateRange",
          "PUT /api/tbbienserviciovigencias"
        ]
      },
      {
        "name": "tb-canal-distribucion-controller",
        "endpoints": [
          "DELETE /api/tbcanaldistribuciones",
          "GET /api/tbcanaldistribuciones/existById/{id}",
          "GET /api/tbcanaldistribuciones/findAll",
          "GET /api/tbcanaldistribuciones/findAllByEstado/{estado}",
          "GET /api/tbcanaldistribuciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcanaldistribuciones/{id}",
          "POST /api/tbcanaldistribuciones",
          "POST /api/tbcanaldistribuciones/findAllByCodigoList",
          "POST /api/tbcanaldistribuciones/findAllByIdList",
          "PUT /api/tbcanaldistribuciones"
        ]
      },
      {
        "name": "tb-canal-emision-comprobante-controller",
        "endpoints": [
          "DELETE /api/tbcanalemisioncomprobantes",
          "GET /api/tbcanalemisioncomprobantes/findAll",
          "GET /api/tbcanalemisioncomprobantes/findAllByEstado/{estado}",
          "GET /api/tbcanalemisioncomprobantes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcanalemisioncomprobantes/findByCodigo/{codigo}",
          "GET /api/tbcanalemisioncomprobantes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbcanalemisioncomprobantes/{id}",
          "POST /api/tbcanalemisioncomprobantes",
          "POST /api/tbcanalemisioncomprobantes/findAllByIdList",
          "PUT /api/tbcanalemisioncomprobantes"
        ]
      },
      {
        "name": "tb-catalogo-documento-operativo-controller",
        "endpoints": [
          "DELETE /api/tbcatalogodocumentooperativos",
          "GET /api/tbcatalogodocumentooperativos/findAllByCodigoSistema/{codigo}",
          "GET /api/tbcatalogodocumentooperativos/{id}",
          "POST /api/tbcatalogodocumentooperativos",
          "POST /api/tbcatalogodocumentooperativos/findAllByCodigoList",
          "POST /api/tbcatalogodocumentooperativos/findAllByIdList",
          "PUT /api/tbcatalogodocumentooperativos"
        ]
      },
      {
        "name": "tb-catalogo-evento-interno-controller",
        "endpoints": [
          "DELETE /api/tbcatalogoeventointernos",
          "GET /api/tbcatalogoeventointernos/findAll",
          "GET /api/tbcatalogoeventointernos/findAllByEstado/{estado}",
          "GET /api/tbcatalogoeventointernos/findAllByIdEventoInterno/{idEventoInterno}",
          "GET /api/tbcatalogoeventointernos/findAllByIdSistema/{idSistema}",
          "GET /api/tbcatalogoeventointernos/findByCodigo/{codigo}",
          "GET /api/tbcatalogoeventointernos/{id}",
          "POST /api/tbcatalogoeventointernos",
          "POST /api/tbcatalogoeventointernos/findAllByCodigoList",
          "POST /api/tbcatalogoeventointernos/findAllByIdList",
          "PUT /api/tbcatalogoeventointernos"
        ]
      },
      {
        "name": "tb-catalogo-nro-orden-controller",
        "endpoints": [
          "DELETE /api/tbcatalogonroordenes",
          "GET /api/tbcatalogonroordenes/{id}",
          "POST /api/tbcatalogonroordenes",
          "PUT /api/tbcatalogonroordenes"
        ]
      },
      {
        "name": "tb-catalogo-operativo-controller",
        "endpoints": [
          "DELETE /api/tbcatalogooperativos",
          "GET /api/tbcatalogooperativos/existById/{id}",
          "GET /api/tbcatalogooperativos/findAll",
          "GET /api/tbcatalogooperativos/findAllByCatalogoOperativo",
          "GET /api/tbcatalogooperativos/findAllByCodigoLike/{codigo}",
          "GET /api/tbcatalogooperativos/findAllByEstado/{estado}",
          "GET /api/tbcatalogooperativos/findAllByEstadoCustom/{estado}",
          "GET /api/tbcatalogooperativos/findAllByEstadoNgSelectToSciSistema/{estado}/{idSistema}",
          "GET /api/tbcatalogooperativos/findAllByNotCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/tbcatalogooperativos/findAllCustom",
          "GET /api/tbcatalogooperativos/findByCodigo/{codigo}",
          "GET /api/tbcatalogooperativos/findByIdAtributoDms/{id}",
          "GET /api/tbcatalogooperativos/findByIdCustom/{id}",
          "GET /api/tbcatalogooperativos/{id}",
          "POST /api/tbcatalogooperativos",
          "POST /api/tbcatalogooperativos/findAllByCodigoAtributoList",
          "POST /api/tbcatalogooperativos/findAllByCodigoList",
          "POST /api/tbcatalogooperativos/findAllByIdAtributoDmsList",
          "POST /api/tbcatalogooperativos/findAllByIdList",
          "POST /api/tbcatalogooperativos/findAllByIdListCustom",
          "POST /api/tbcatalogooperativos/findAllByIdListNotCustom",
          "PUT /api/tbcatalogooperativos"
        ]
      },
      {
        "name": "tb-catalogo-reporte-controller",
        "endpoints": [
          "DELETE /api/tbcatalogoreportes",
          "GET /api/tbcatalogoreportes/{id}",
          "POST /api/tbcatalogoreportes",
          "PUT /api/tbcatalogoreportes"
        ]
      },
      {
        "name": "tb-catalogo-sda-controller",
        "endpoints": [
          "DELETE /api/tbcatalogosdas",
          "GET /api/tbcatalogosdas/findAll",
          "GET /api/tbcatalogosdas/findAllByEstado/{estado}",
          "GET /api/tbcatalogosdas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcatalogosdas/findAllByIdCategoriaCatalogo/{idCategoriaCatalogo}",
          "GET /api/tbcatalogosdas/findByCodigo/{codigo}",
          "GET /api/tbcatalogosdas/{id}",
          "POST /api/tbcatalogosdas",
          "POST /api/tbcatalogosdas/findAllByCodigoList",
          "POST /api/tbcatalogosdas/findAllByCodigoList/{estado}",
          "POST /api/tbcatalogosdas/findAllByIdList",
          "POST /api/tbcatalogosdas/findAllByIdList/{estado}",
          "POST /api/tbcatalogosdas/findAllByTbCategoriaCatalogoSdaCodigoList",
          "PUT /api/tbcatalogosdas"
        ]
      },
      {
        "name": "tb-categoria-catalogo-sda-controller",
        "endpoints": [
          "DELETE /api/tbcategoriacatalogosdas",
          "GET /api/tbcategoriacatalogosdas/findAll",
          "GET /api/tbcategoriacatalogosdas/findAllByEstado/{estado}",
          "GET /api/tbcategoriacatalogosdas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcategoriacatalogosdas/findByCodigo/{codigo}",
          "GET /api/tbcategoriacatalogosdas/{id}",
          "POST /api/tbcategoriacatalogosdas",
          "POST /api/tbcategoriacatalogosdas/findAllByCodigoList",
          "POST /api/tbcategoriacatalogosdas/findAllByIdList",
          "PUT /api/tbcategoriacatalogosdas"
        ]
      },
      {
        "name": "tb-categoria-parametro-controller",
        "endpoints": [
          "DELETE /api/tbcategoriaparametros",
          "GET /api/tbcategoriaparametros/existById/{id}",
          "GET /api/tbcategoriaparametros/findAll",
          "GET /api/tbcategoriaparametros/findAllByEstado/{estado}",
          "GET /api/tbcategoriaparametros/findAllByIdSistemaAndCtrlEspecial/{idSistema}/{ctrlEspecial}",
          "GET /api/tbcategoriaparametros/{id}",
          "POST /api/tbcategoriaparametros",
          "POST /api/tbcategoriaparametros/findAllByCodigoList",
          "POST /api/tbcategoriaparametros/findAllByIdList",
          "PUT /api/tbcategoriaparametros"
        ]
      },
      {
        "name": "tb-clase-bulto-controller",
        "endpoints": [
          "DELETE /api/tbclasebultos",
          "GET /api/tbclasebultos/existById/{id}",
          "GET /api/tbclasebultos/findAll",
          "GET /api/tbclasebultos/findAllByEstado/{estado}",
          "GET /api/tbclasebultos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbclasebultos/findByCodigo/{codigo}",
          "GET /api/tbclasebultos/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbclasebultos/findByCodigoNgSelect/{codigo}",
          "GET /api/tbclasebultos/{id}",
          "POST /api/tbclasebultos",
          "POST /api/tbclasebultos/findAllByCodigoList",
          "POST /api/tbclasebultos/findAllByIdList",
          "PUT /api/tbclasebultos"
        ]
      },
      {
        "name": "tb-clase-peligro-controller",
        "endpoints": [
          "DELETE /api/tbclasepeligros",
          "GET /api/tbclasepeligros/existById/{id}",
          "GET /api/tbclasepeligros/findAll",
          "GET /api/tbclasepeligros/findAllByEstado/{estado}",
          "GET /api/tbclasepeligros/{id}",
          "POST /api/tbclasepeligros",
          "POST /api/tbclasepeligros/findAllByCodigoList",
          "POST /api/tbclasepeligros/findAllByIdList",
          "PUT /api/tbclasepeligros"
        ]
      },
      {
        "name": "tb-clase-tarifa-aerea-controller",
        "endpoints": [
          "DELETE /api/tbclasetarifaaereas",
          "GET /api/tbclasetarifaaereas/existById/{id}",
          "GET /api/tbclasetarifaaereas/findAll",
          "GET /api/tbclasetarifaaereas/findAllByEstado/{estado}",
          "GET /api/tbclasetarifaaereas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbclasetarifaaereas/{id}",
          "POST /api/tbclasetarifaaereas",
          "POST /api/tbclasetarifaaereas/findAllByIdList",
          "PUT /api/tbclasetarifaaereas"
        ]
      },
      {
        "name": "tb-clasificacion-bien-servicio-controller",
        "endpoints": [
          "DELETE /api/tbclasificacionbienservicios",
          "GET /api/tbclasificacionbienservicios/existById/{id}",
          "GET /api/tbclasificacionbienservicios/findAll",
          "GET /api/tbclasificacionbienservicios/findAllByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbclasificacionbienservicios/findAllByEstado/{estado}",
          "GET /api/tbclasificacionbienservicios/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbclasificacionbienservicios/{id}",
          "POST /api/tbclasificacionbienservicios",
          "POST /api/tbclasificacionbienservicios/findAllByIdList",
          "PUT /api/tbclasificacionbienservicios"
        ]
      },
      {
        "name": "tb-codificacion-sunat-controller",
        "endpoints": [
          "DELETE /api/tbcodificacionsunates",
          "GET /api/tbcodificacionsunates/existById/{id}",
          "GET /api/tbcodificacionsunates/findAll",
          "GET /api/tbcodificacionsunates/findAllByEstado/{estado}",
          "GET /api/tbcodificacionsunates/findAllByEstadoNgSelect",
          "GET /api/tbcodificacionsunates/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcodificacionsunates/findAllTbCodificacionSunatPage",
          "GET /api/tbcodificacionsunates/{id}",
          "POST /api/tbcodificacionsunates",
          "POST /api/tbcodificacionsunates/findAllByCodigoList",
          "POST /api/tbcodificacionsunates/findAllByIdList",
          "PUT /api/tbcodificacionsunates"
        ]
      },
      {
        "name": "tb-codigo-producto-sunat-controller",
        "endpoints": [
          "DELETE /api/tbcodigoproductosunates",
          "GET /api/tbcodigoproductosunates/existsByCodigo/{codigo}",
          "GET /api/tbcodigoproductosunates/findAll",
          "GET /api/tbcodigoproductosunates/findAllByEstado/{estado}",
          "GET /api/tbcodigoproductosunates/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcodigoproductosunates/findByCodigo/{codigo}",
          "GET /api/tbcodigoproductosunates/{id}",
          "POST /api/tbcodigoproductosunates",
          "POST /api/tbcodigoproductosunates/findAllByIdList",
          "PUT /api/tbcodigoproductosunates"
        ]
      },
      {
        "name": "tb-concepto-control-controller",
        "endpoints": [
          "DELETE /api/tbconceptocontroles",
          "GET /api/tbconceptocontroles/existById/{id}",
          "GET /api/tbconceptocontroles/findAll",
          "GET /api/tbconceptocontroles/findAllByEstado/{estado}",
          "GET /api/tbconceptocontroles/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbconceptocontroles/findByCodigo/{codigo}",
          "GET /api/tbconceptocontroles/findIdByCodigo/{codigo}",
          "GET /api/tbconceptocontroles/{id}",
          "POST /api/tbconceptocontroles",
          "POST /api/tbconceptocontroles/findAllByCodigoList",
          "POST /api/tbconceptocontroles/findAllByIdList",
          "POST /api/tbconceptocontroles/findAllIdByCodigoList",
          "PUT /api/tbconceptocontroles"
        ]
      },
      {
        "name": "tb-concepto-controller",
        "endpoints": [
          "DELETE /api/tbconceptos",
          "GET /api/tbconceptos/findAll",
          "GET /api/tbconceptos/findAllByCodigoConceptoControlAndEstado/{codigoConceptoControl}/{estado}",
          "GET /api/tbconceptos/findAllByEstado/{estado}",
          "GET /api/tbconceptos/{id}",
          "POST /api/tbconceptos",
          "POST /api/tbconceptos/findAllByIdList",
          "PUT /api/tbconceptos"
        ]
      },
      {
        "name": "tb-concepto-sistema-controller",
        "endpoints": [
          "DELETE /api/tbconceptosistemas",
          "GET /api/tbconceptosistemas/findAllIdByIdConcepto/{idConcepto}",
          "GET /api/tbconceptosistemas/{tbConcepto}/{sciSistema}",
          "POST /api/tbconceptosistemas",
          "POST /api/tbconceptosistemas/insertAndDeleteAllCustom",
          "PUT /api/tbconceptosistemas"
        ]
      },
      {
        "name": "tb-condicion-carga-controller",
        "endpoints": [
          "DELETE /api/tbcondicioncargas",
          "GET /api/tbcondicioncargas/existById/{id}",
          "GET /api/tbcondicioncargas/findAll",
          "GET /api/tbcondicioncargas/findAllByEstado/{estado}",
          "GET /api/tbcondicioncargas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcondicioncargas/{id}",
          "POST /api/tbcondicioncargas",
          "POST /api/tbcondicioncargas/findAllByIdList",
          "PUT /api/tbcondicioncargas"
        ]
      },
      {
        "name": "tb-condicion-contrato-transporte-controller",
        "endpoints": [
          "DELETE /api/tbcondicioncontratotransportes",
          "GET /api/tbcondicioncontratotransportes/existById/{id}",
          "GET /api/tbcondicioncontratotransportes/findAll",
          "GET /api/tbcondicioncontratotransportes/findAllByEstado/{estado}",
          "GET /api/tbcondicioncontratotransportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcondicioncontratotransportes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbcondicioncontratotransportes/{id}",
          "POST /api/tbcondicioncontratotransportes",
          "PUT /api/tbcondicioncontratotransportes"
        ]
      },
      {
        "name": "tb-configuracion-asignacion-controller",
        "endpoints": [
          "DELETE /api/tbconfiguracionasignaciones",
          "GET /api/tbconfiguracionasignaciones/findAllByIdSistema/{idSistema}",
          "GET /api/tbconfiguracionasignaciones/findByCodigoSistemaAndCodigo/{codigoSistema}/{codigo}",
          "GET /api/tbconfiguracionasignaciones/findByIdSistemaAndCodigo/{idSistema}/{codigo}",
          "GET /api/tbconfiguracionasignaciones/{id}",
          "POST /api/tbconfiguracionasignaciones",
          "POST /api/tbconfiguracionasignaciones/findAllByCodigoList",
          "POST /api/tbconfiguracionasignaciones/findAllByIdList",
          "PUT /api/tbconfiguracionasignaciones"
        ]
      },
      {
        "name": "tb-configuracion-asignacion-detalle-controller",
        "endpoints": [
          "DELETE /api/tbconfiguracionasignaciondetalles",
          "GET /api/tbconfiguracionasignaciondetalles/findAllByIdConfiguracionAsignacion/{idConfiguracionAsignacion}",
          "GET /api/tbconfiguracionasignaciondetalles/{tbConfiguracionAsignacion}/{idTabla}",
          "POST /api/tbconfiguracionasignaciondetalles",
          "POST /api/tbconfiguracionasignaciondetalles/insertAndDeleteAllCustom",
          "PUT /api/tbconfiguracionasignaciondetalles"
        ]
      },
      {
        "name": "tb-configuracion-nro-orden-catalogo-controller",
        "endpoints": [
          "DELETE /api/tbconfiguracionnroordencatalogos",
          "GET /api/tbconfiguracionnroordencatalogos/{tbConfiguracionNroOrden}/{tbCatalogoNroOrden}",
          "POST /api/tbconfiguracionnroordencatalogos",
          "PUT /api/tbconfiguracionnroordencatalogos"
        ]
      },
      {
        "name": "tb-configuracion-nro-orden-controller",
        "endpoints": [
          "DELETE /api/tbconfiguracionnroordenes",
          "GET /api/tbconfiguracionnroordenes/findAll",
          "GET /api/tbconfiguracionnroordenes/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/tbconfiguracionnroordenes/findAllByIdSistema/{idSistema}",
          "GET /api/tbconfiguracionnroordenes/{id}",
          "POST /api/tbconfiguracionnroordenes",
          "POST /api/tbconfiguracionnroordenes/findAllByCodigoSistemaList",
          "PUT /api/tbconfiguracionnroordenes"
        ]
      },
      {
        "name": "tb-configuracion-vehicular-controller",
        "endpoints": [
          "DELETE /api/tbconfiguracionvehiculares",
          "GET /api/tbconfiguracionvehiculares/existById/{id}",
          "GET /api/tbconfiguracionvehiculares/findAll",
          "GET /api/tbconfiguracionvehiculares/findByNombre/{nombre}",
          "GET /api/tbconfiguracionvehiculares/{id}",
          "POST /api/tbconfiguracionvehiculares",
          "POST /api/tbconfiguracionvehiculares/findAllByIdList",
          "POST /api/tbconfiguracionvehiculares/findAllByNombreList",
          "PUT /api/tbconfiguracionvehiculares"
        ]
      },
      {
        "name": "tb-contenido-tablero-controller",
        "endpoints": [
          "DELETE /api/tbcontenidotableros",
          "GET /api/tbcontenidotableros/findAllByIdDatosTablero/{idDatosTablero}",
          "GET /api/tbcontenidotableros/{id}",
          "POST /api/tbcontenidotableros",
          "POST /api/tbcontenidotableros/findAllByIdList",
          "POST /api/tbcontenidotableros/findAllByIdListAndIdSistema/{idSistema}",
          "PUT /api/tbcontenidotableros"
        ]
      },
      {
        "name": "tb-continente-controller",
        "endpoints": [
          "DELETE /api/tbcontinentes",
          "GET /api/tbcontinentes/existById/{id}",
          "GET /api/tbcontinentes/findAll",
          "GET /api/tbcontinentes/findAllByEstado/{estado}",
          "GET /api/tbcontinentes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcontinentes/{id}",
          "POST /api/tbcontinentes",
          "POST /api/tbcontinentes/findAllByIdList",
          "PUT /api/tbcontinentes"
        ]
      },
      {
        "name": "tb-control-notificacion-controller",
        "endpoints": [
          "DELETE /api/tbcontrolnotificaciones",
          "GET /api/tbcontrolnotificaciones/findAll",
          "GET /api/tbcontrolnotificaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbcontrolnotificaciones/findAllByIdSistema/{idSistema}",
          "GET /api/tbcontrolnotificaciones/findByCodigo/{codigo}",
          "GET /api/tbcontrolnotificaciones/{id}",
          "POST /api/tbcontrolnotificaciones",
          "POST /api/tbcontrolnotificaciones/findAllByCodigoList",
          "POST /api/tbcontrolnotificaciones/findAllByIdList",
          "PUT /api/tbcontrolnotificaciones"
        ]
      },
      {
        "name": "tb-control-notificacion-sistema-controller",
        "endpoints": [
          "DELETE /api/tbcontrolnotificacionsistemas",
          "GET /api/tbcontrolnotificacionsistemas/findAllIdByIdControlNotificacion/{idControlNotificacion}",
          "GET /api/tbcontrolnotificacionsistemas/{tbControlNotificacion}/{sciSistema}",
          "POST /api/tbcontrolnotificacionsistemas",
          "POST /api/tbcontrolnotificacionsistemas/insertAndDeleteAllCustom",
          "PUT /api/tbcontrolnotificacionsistemas"
        ]
      },
      {
        "name": "tb-control-percepcion-controller",
        "endpoints": [
          "DELETE /api/tbcontrolpercepciones",
          "GET /api/tbcontrolpercepciones/existById/{id}",
          "GET /api/tbcontrolpercepciones/findAll",
          "GET /api/tbcontrolpercepciones/findAllByEstado/{estado}",
          "GET /api/tbcontrolpercepciones/findByCodigo/{codigo}",
          "GET /api/tbcontrolpercepciones/{id}",
          "POST /api/tbcontrolpercepciones",
          "POST /api/tbcontrolpercepciones/findAllByCodigoList",
          "POST /api/tbcontrolpercepciones/findAllByIdList",
          "PUT /api/tbcontrolpercepciones"
        ]
      },
      {
        "name": "tb-control-transporte-controller",
        "endpoints": [
          "DELETE /api/tbcontroltransportes",
          "GET /api/tbcontroltransportes/findAll",
          "GET /api/tbcontroltransportes/findAllByEstado/{estado}",
          "GET /api/tbcontroltransportes/findIdByCodigo/{codigoControlTransporte}",
          "GET /api/tbcontroltransportes/{id}",
          "POST /api/tbcontroltransportes",
          "POST /api/tbcontroltransportes/findAllByCodigoList",
          "POST /api/tbcontroltransportes/findAllByIdList",
          "PUT /api/tbcontroltransportes"
        ]
      },
      {
        "name": "tb-credencial-conexion-general-controller",
        "endpoints": [
          "DELETE /api/tbcredencialconexiongenerales",
          "GET /api/tbcredencialconexiongenerales/findAll",
          "GET /api/tbcredencialconexiongenerales/findAllByIdSistema/{idSistema}",
          "GET /api/tbcredencialconexiongenerales/{id}",
          "POST /api/tbcredencialconexiongenerales",
          "POST /api/tbcredencialconexiongenerales/findAllByIdList",
          "PUT /api/tbcredencialconexiongenerales"
        ]
      },
      {
        "name": "tb-datos-tablero-controller",
        "endpoints": [
          "DELETE /api/tbdatostableros",
          "GET /api/tbdatostableros/findAllByEstado/{estado}",
          "GET /api/tbdatostableros/findAllByIdSistemaAndEstado/{idSistema}/{estado}",
          "GET /api/tbdatostableros/findAllBySistema/{idSistema}",
          "GET /api/tbdatostableros/{id}",
          "POST /api/tbdatostableros",
          "POST /api/tbdatostableros/findAllByIdList",
          "PUT /api/tbdatostableros"
        ]
      },
      {
        "name": "tb-deposito-controller",
        "endpoints": [
          "GET /api/tbdepositos/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-derecho-aduana-controller",
        "endpoints": [
          "DELETE /api/tbderechoaduanas",
          "GET /api/tbderechoaduanas/findAll",
          "GET /api/tbderechoaduanas/findAllByEstado/{estado}",
          "GET /api/tbderechoaduanas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbderechoaduanas/{id}",
          "POST /api/tbderechoaduanas",
          "POST /api/tbderechoaduanas/findAllByCodigoList",
          "POST /api/tbderechoaduanas/findAllByIdList",
          "PUT /api/tbderechoaduanas"
        ]
      },
      {
        "name": "tb-detraccion-operacion-controller",
        "endpoints": [
          "DELETE /api/tbdetraccionoperaciones",
          "GET /api/tbdetraccionoperaciones/existByCodigo/{codigo}",
          "GET /api/tbdetraccionoperaciones/existById/{id}",
          "GET /api/tbdetraccionoperaciones/findAll",
          "GET /api/tbdetraccionoperaciones/findAllByEstado/{estado}",
          "GET /api/tbdetraccionoperaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbdetraccionoperaciones/{id}",
          "POST /api/tbdetraccionoperaciones",
          "POST /api/tbdetraccionoperaciones/findAllByCodigoList",
          "POST /api/tbdetraccionoperaciones/findAllByIdList",
          "POST /api/tbdetraccionoperaciones/findCustomDto",
          "PUT /api/tbdetraccionoperaciones"
        ]
      },
      {
        "name": "tb-entidad-controller",
        "endpoints": [
          "DELETE /api/tbentidades",
          "GET /api/tbentidades/findByNroDocumentoAndEstado/{nroDocumento}/{estado}",
          "GET /api/tbentidades/{id}",
          "POST /api/tbentidades",
          "POST /api/tbentidades/findAllByIdList",
          "PUT /api/tbentidades"
        ]
      },
      {
        "name": "tb-error-transaccion-aduanera-controller",
        "endpoints": [
          "DELETE /api/tberrortransaccionaduaneras",
          "GET /api/tberrortransaccionaduaneras/findAll",
          "GET /api/tberrortransaccionaduaneras/findAllByEstado/{estado}",
          "GET /api/tberrortransaccionaduaneras/findByCodigo/{codigo}",
          "GET /api/tberrortransaccionaduaneras/findCount",
          "GET /api/tberrortransaccionaduaneras/{id}",
          "POST /api/tberrortransaccionaduaneras",
          "POST /api/tberrortransaccionaduaneras/findAllByCodigoList",
          "POST /api/tberrortransaccionaduaneras/findAllByIdList",
          "PUT /api/tberrortransaccionaduaneras"
        ]
      },
      {
        "name": "tb-estado-civil-controller",
        "endpoints": [
          "DELETE /api/tbestadociviles",
          "GET /api/tbestadociviles/existById/{id}",
          "GET /api/tbestadociviles/findAll",
          "GET /api/tbestadociviles/findAllByEstado/{estado}",
          "GET /api/tbestadociviles/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbestadociviles/{id}",
          "POST /api/tbestadociviles",
          "POST /api/tbestadociviles/findAllByIdlist",
          "PUT /api/tbestadociviles"
        ]
      },
      {
        "name": "tb-estado-mercaderia-controller",
        "endpoints": [
          "DELETE /api/tbestadomercaderias",
          "GET /api/tbestadomercaderias/existById/{id}",
          "GET /api/tbestadomercaderias/findAll",
          "GET /api/tbestadomercaderias/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbestadomercaderias/findByCodigo/{codigo}",
          "GET /api/tbestadomercaderias/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbestadomercaderias/{id}",
          "POST /api/tbestadomercaderias",
          "POST /api/tbestadomercaderias/findAllByCodigoList",
          "POST /api/tbestadomercaderias/findAllByIdList",
          "PUT /api/tbestadomercaderias"
        ]
      },
      {
        "name": "tb-etapa-transporte-controller",
        "endpoints": [
          "DELETE /api/tbetapatransportes",
          "GET /api/tbetapatransportes/existById/{id}",
          "GET /api/tbetapatransportes/findAll",
          "GET /api/tbetapatransportes/findAllByEstado/{estado}",
          "GET /api/tbetapatransportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbetapatransportes/{id}",
          "POST /api/tbetapatransportes",
          "POST /api/tbetapatransportes/findAllByIdList",
          "PUT /api/tbetapatransportes"
        ]
      },
      {
        "name": "tb-evento-interno-catalogo-controller",
        "endpoints": [
          "DELETE /api/tbeventointernocatalogos",
          "GET /api/tbeventointernocatalogos/findAll",
          "GET /api/tbeventointernocatalogos/{tbEventoInterno}/{tbCatalogoEventoInterno}",
          "POST /api/tbeventointernocatalogos",
          "PUT /api/tbeventointernocatalogos"
        ]
      },
      {
        "name": "tb-evento-interno-control-notificacion-controller",
        "endpoints": [
          "DELETE /api/tbeventointernocontrolnotificaciones",
          "GET /api/tbeventointernocontrolnotificaciones/findAll",
          "GET /api/tbeventointernocontrolnotificaciones/findAllByIdControlNotificacion/{id}",
          "GET /api/tbeventointernocontrolnotificaciones/findAllByIdEventoInterno/{id}",
          "GET /api/tbeventointernocontrolnotificaciones/{tbEventoInterno}/{tbControlNotificacion}",
          "POST /api/tbeventointernocontrolnotificaciones",
          "POST /api/tbeventointernocontrolnotificaciones/findAllByIdEventoInternoList",
          "PUT /api/tbeventointernocontrolnotificaciones"
        ]
      },
      {
        "name": "tb-evento-interno-controller",
        "endpoints": [
          "DELETE /api/tbeventointernos",
          "GET /api/tbeventointernos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbeventointernos/findAllBySistema/{idSistema}",
          "GET /api/tbeventointernos/findAllBySistemaAndEstado/{idSistema}/{estado}",
          "GET /api/tbeventointernos/findByCodigo/{codigo}",
          "GET /api/tbeventointernos/{id}",
          "POST /api/tbeventointernos",
          "POST /api/tbeventointernos/findAllByCodigoList",
          "POST /api/tbeventointernos/findAllByIdList",
          "PUT /api/tbeventointernos"
        ]
      },
      {
        "name": "tb-feria-controller",
        "endpoints": [
          "DELETE /api/tbferias",
          "GET /api/tbferias/findAll",
          "GET /api/tbferias/findAllByEstado/{estado}",
          "GET /api/tbferias/{id}",
          "POST /api/tbferias",
          "PUT /api/tbferias"
        ]
      },
      {
        "name": "tb-feriado-controller",
        "endpoints": [
          "DELETE /api/tbferiados",
          "GET /api/tbferiados/findAll",
          "GET /api/tbferiados/findByFechaFeriado/{fechaFeriado}",
          "GET /api/tbferiados/{id}",
          "POST /api/tbferiados",
          "POST /api/tbferiados/findAllByIdList",
          "PUT /api/tbferiados"
        ]
      },
      {
        "name": "tb-forma-embarque-controller",
        "endpoints": [
          "DELETE /api/tbformaembarques",
          "GET /api/tbformaembarques/existById/{id}",
          "GET /api/tbformaembarques/findAll",
          "GET /api/tbformaembarques/findAllByEstado/{estado}",
          "GET /api/tbformaembarques/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbformaembarques/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbformaembarques/{id}",
          "POST /api/tbformaembarques",
          "POST /api/tbformaembarques/findAllByCodigoList",
          "POST /api/tbformaembarques/findAllByIdList",
          "PUT /api/tbformaembarques"
        ]
      },
      {
        "name": "tb-forma-pago-controller",
        "endpoints": [
          "DELETE /api/tbformapagos",
          "GET /api/tbformapagos/existById/{id}",
          "GET /api/tbformapagos/findAll",
          "GET /api/tbformapagos/findAllByEstado/{estado}",
          "GET /api/tbformapagos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbformapagos/{id}",
          "POST /api/tbformapagos",
          "POST /api/tbformapagos/findAllByCodigoList",
          "POST /api/tbformapagos/findAllByIdList",
          "PUT /api/tbformapagos"
        ]
      },
      {
        "name": "tb-grupo-catalogo-operativo-catalogo-operativo-controller",
        "endpoints": [
          "DELETE /api/tbgrupocatalogooperativocatalogooperativos",
          "GET /api/tbgrupocatalogooperativocatalogooperativos/findAllByGrupoCatalogoOperativo/{idGrupoCatalogoOperativo}",
          "GET /api/tbgrupocatalogooperativocatalogooperativos/findAllByIdGrupoCatalogoOperativo/{idGrupoCatalogoOperativo}",
          "GET /api/tbgrupocatalogooperativocatalogooperativos/findAllByIdSistemaCustom/{idSistema}",
          "GET /api/tbgrupocatalogooperativocatalogooperativos/findAllCatalogoOperativoByCodigoGrupoCatalogoOperativo/{codGrupCatOpe}",
          "GET /api/tbgrupocatalogooperativocatalogooperativos/{tbGrupoCatalogoOperativo}/{tbCatalogoOperativo}",
          "POST /api/tbgrupocatalogooperativocatalogooperativos",
          "POST /api/tbgrupocatalogooperativocatalogooperativos/findAllByIdCatalogoOperativoList",
          "POST /api/tbgrupocatalogooperativocatalogooperativos/findAllByIdGrupoCatalogoOperativoList",
          "POST /api/tbgrupocatalogooperativocatalogooperativos/findAllCatalogoOperativoByCodigoGrupoCatalogoOperativoList",
          "POST /api/tbgrupocatalogooperativocatalogooperativos/insertAndDeleteAllCustom",
          "PUT /api/tbgrupocatalogooperativocatalogooperativos"
        ]
      },
      {
        "name": "tb-grupo-catalogo-operativo-controller",
        "endpoints": [
          "DELETE /api/tbgrupocatalogooperativos",
          "GET /api/tbgrupocatalogooperativos/findAll",
          "GET /api/tbgrupocatalogooperativos/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/tbgrupocatalogooperativos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbgrupocatalogooperativos/findAllBySistema/{idSistema}",
          "GET /api/tbgrupocatalogooperativos/findAllBySistemaAndEstado/{idSistema}/{estado}",
          "GET /api/tbgrupocatalogooperativos/findByCodigo/{codigo}",
          "GET /api/tbgrupocatalogooperativos/findByCodigoLikeAndIdSistema/{codigo}/{idSistema}",
          "GET /api/tbgrupocatalogooperativos/{id}",
          "POST /api/tbgrupocatalogooperativos",
          "POST /api/tbgrupocatalogooperativos/findAllByCodigoList",
          "POST /api/tbgrupocatalogooperativos/findAllByIdList",
          "PUT /api/tbgrupocatalogooperativos"
        ]
      },
      {
        "name": "tb-grupo-concepto-controller",
        "endpoints": [
          "DELETE /api/tbgrupoconceptos",
          "GET /api/tbgrupoconceptos/findAllByEstado/{estado}",
          "GET /api/tbgrupoconceptos/findAllByIdSistema/{idSistema}",
          "GET /api/tbgrupoconceptos/findAllByIdTipoOperador/{idTipoOperador}",
          "GET /api/tbgrupoconceptos/findByCodigo/{codigo}",
          "GET /api/tbgrupoconceptos/{id}",
          "POST /api/tbgrupoconceptos",
          "POST /api/tbgrupoconceptos/findAllByCodigoList",
          "POST /api/tbgrupoconceptos/findAllByIdGrupoConceptoList",
          "POST /api/tbgrupoconceptos/findAllByIdSistemaList",
          "POST /api/tbgrupoconceptos/findAllByIdTipoOperadorList",
          "PUT /api/tbgrupoconceptos"
        ]
      },
      {
        "name": "tb-grupo-concepto-sistema-concepto-controller",
        "endpoints": [
          "DELETE /api/tbgrupoconceptosistemaconceptos",
          "GET /api/tbgrupoconceptosistemaconceptos/{tbGrupoConcepto}/{sciSistema}/{tbConcepto}",
          "POST /api/tbgrupoconceptosistemaconceptos",
          "PUT /api/tbgrupoconceptosistemaconceptos"
        ]
      },
      {
        "name": "tb-grupo-concepto-sistema-controller",
        "endpoints": [
          "DELETE /api/tbgrupoconceptosistemas",
          "GET /api/tbgrupoconceptosistemas/{tbGrupoConcepto}/{sciSistema}",
          "POST /api/tbgrupoconceptosistemas",
          "POST /api/tbgrupoconceptosistemas/findAllByIdSistemaList",
          "PUT /api/tbgrupoconceptosistemas"
        ]
      },
      {
        "name": "tb-grupo-embalaje-controller",
        "endpoints": [
          "DELETE /api/tbgrupoembalajes",
          "GET /api/tbgrupoembalajes/findAll",
          "GET /api/tbgrupoembalajes/findAllByEstado/{estado}",
          "GET /api/tbgrupoembalajes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbgrupoembalajes/{id}",
          "POST /api/tbgrupoembalajes",
          "POST /api/tbgrupoembalajes/findAllByIdList",
          "PUT /api/tbgrupoembalajes"
        ]
      },
      {
        "name": "tb-grupo-incidencia-controller",
        "endpoints": [
          "DELETE /api/tbgrupoincidencias",
          "DELETE /api/tbgrupoincidencias/deleteAll",
          "GET /api/tbgrupoincidencias/existById/{id}",
          "GET /api/tbgrupoincidencias/findAll",
          "GET /api/tbgrupoincidencias/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/tbgrupoincidencias/findAllByEstado/{estado}",
          "GET /api/tbgrupoincidencias/findAllByIdSistema/{idSistema}",
          "GET /api/tbgrupoincidencias/findByIdCustom/{id}",
          "GET /api/tbgrupoincidencias/{id}",
          "POST /api/tbgrupoincidencias",
          "POST /api/tbgrupoincidencias/findAllByCodigoList",
          "POST /api/tbgrupoincidencias/findAllByIdList",
          "PUT /api/tbgrupoincidencias",
          "PUT /api/tbgrupoincidencias/updateAllForNroSecuencia"
        ]
      },
      {
        "name": "tb-grupo-reporte-controller",
        "endpoints": [
          "DELETE /api/tbgruporeportes",
          "GET /api/tbgruporeportes/findAll",
          "GET /api/tbgruporeportes/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/tbgruporeportes/findAllByCodigoSistemaAndEstado/{codigoSistema}/{estado}",
          "GET /api/tbgruporeportes/findAllByCodigoSistemaAndEstadoCustom/{codigoSistema}/{estado}",
          "GET /api/tbgruporeportes/findAllByEstado/{estado}",
          "GET /api/tbgruporeportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbgruporeportes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbgruporeportes/{id}",
          "POST /api/tbgruporeportes",
          "POST /api/tbgruporeportes/findAllByCodigoList",
          "POST /api/tbgruporeportes/findAllByIdList",
          "PUT /api/tbgruporeportes",
          "PUT /api/tbgruporeportes/updateAllForNroSecuencia"
        ]
      },
      {
        "name": "tb-hito-controller",
        "endpoints": [
          "DELETE /api/tbhitos",
          "GET /api/tbhitos/findAll",
          "GET /api/tbhitos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbhitos/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbhitos/findCount",
          "GET /api/tbhitos/{id}",
          "POST /api/tbhitos",
          "POST /api/tbhitos/findAllByCodigoList",
          "POST /api/tbhitos/findAllByIdList",
          "PUT /api/tbhitos"
        ]
      },
      {
        "name": "tb-impuesto-controller",
        "endpoints": [
          "DELETE /api/tbimpuestos",
          "GET /api/tbimpuestos/existById/{id}",
          "GET /api/tbimpuestos/findAll",
          "GET /api/tbimpuestos/findAllByTipoImpuestoListAndFchInicio",
          "GET /api/tbimpuestos/findByTipoImpuestoAndFchInicio/{idTipoImpuesto}/{fechaInicio}",
          "GET /api/tbimpuestos/{id}",
          "POST /api/tbimpuestos",
          "POST /api/tbimpuestos/findAllByIdList",
          "PUT /api/tbimpuestos"
        ]
      },
      {
        "name": "tb-impuesto-regla-controller",
        "endpoints": [
          "DELETE /api/tbimpuestoreglas",
          "GET /api/tbimpuestoreglas/existById/{idImpuesto}/{idActividadEconomica}/{idRegimenTributario}",
          "GET /api/tbimpuestoreglas/findAllByIdActividadEconomica/{idActividadEconomica}",
          "GET /api/tbimpuestoreglas/findAllByIdImpuesto/{idImpuesto}",
          "GET /api/tbimpuestoreglas/findAllByIdRegimenTributario/{idRegimenTributario}",
          "GET /api/tbimpuestoreglas/{idImpuesto}/{idActividadEconomica}/{idRegimenTributario}",
          "POST /api/tbimpuestoreglas",
          "PUT /api/tbimpuestoreglas"
        ]
      },
      {
        "name": "tb-incoterm-controller",
        "endpoints": [
          "DELETE /api/tbincotermes",
          "GET /api/tbincotermes/existById/{id}",
          "GET /api/tbincotermes/findAll",
          "GET /api/tbincotermes/findAllByCodigoVersionIncotermAndEstadoNgSelect/{codigoVersion}/{estado}",
          "GET /api/tbincotermes/findByCodigo/{codigo}",
          "GET /api/tbincotermes/findByCodigoAndCodigoVersionIncotermAndEstado/{codigo}/{codigoVersionIncoterm}/{estado}",
          "GET /api/tbincotermes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbincotermes/findByTbVersionIncotermAndEstado/{codigoVersion}/{estado}",
          "GET /api/tbincotermes/{id}",
          "POST /api/tbincotermes",
          "POST /api/tbincotermes/findAllByCodigoList",
          "POST /api/tbincotermes/findAllByIdList",
          "PUT /api/tbincotermes"
        ]
      },
      {
        "name": "tb-lugar-aduanero-controller",
        "endpoints": [
          "DELETE /api/tblugaraduaneros",
          "GET /api/tblugaraduaneros/existById/{id}",
          "GET /api/tblugaraduaneros/findAll",
          "GET /api/tblugaraduaneros/findAllByEstado/{estado}",
          "GET /api/tblugaraduaneros/findAllByEstadoNgSelect/{estado}",
          "GET /api/tblugaraduaneros/{id}",
          "POST /api/tblugaraduaneros",
          "POST /api/tblugaraduaneros/findAllByIdList",
          "PUT /api/tblugaraduaneros"
        ]
      },
      {
        "name": "tb-lugar-llenado-contenedor-controller",
        "endpoints": [
          "DELETE /api/tblugarllenadocontenedores",
          "GET /api/tblugarllenadocontenedores/findAll",
          "GET /api/tblugarllenadocontenedores/findAllByEstado/{estado}",
          "GET /api/tblugarllenadocontenedores/findByCodigo/{codigo}",
          "POST /api/tblugarllenadocontenedores",
          "POST /api/tblugarllenadocontenedores/findAllByCodigoList",
          "POST /api/tblugarllenadocontenedores/findAllByIdList",
          "PUT /api/tblugarllenadocontenedores"
        ]
      },
      {
        "name": "tb-marca-comercial-vehiculo-controller",
        "endpoints": [
          "DELETE /api/tbmarcacomercialvehiculos",
          "GET /api/tbmarcacomercialvehiculos/findAll",
          "GET /api/tbmarcacomercialvehiculos/findAllByEstado/{estado}",
          "GET /api/tbmarcacomercialvehiculos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmarcacomercialvehiculos/findByCodigo/{codigo}",
          "GET /api/tbmarcacomercialvehiculos/{id}",
          "POST /api/tbmarcacomercialvehiculos",
          "POST /api/tbmarcacomercialvehiculos/findAllByCodigoList",
          "POST /api/tbmarcacomercialvehiculos/findAllByIdList",
          "PUT /api/tbmarcacomercialvehiculos"
        ]
      },
      {
        "name": "tb-mercancia-especial-controller",
        "endpoints": [
          "DELETE /api/tbmercanciaespeciales",
          "GET /api/tbmercanciaespeciales/existById/{id}",
          "GET /api/tbmercanciaespeciales/findAll",
          "GET /api/tbmercanciaespeciales/findAllByEstado/{estado}",
          "GET /api/tbmercanciaespeciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmercanciaespeciales/findByCodigo/{codigo}",
          "GET /api/tbmercanciaespeciales/{id}",
          "POST /api/tbmercanciaespeciales",
          "POST /api/tbmercanciaespeciales/findAllByCodigoList",
          "POST /api/tbmercanciaespeciales/findAllByIdList",
          "PUT /api/tbmercanciaespeciales"
        ]
      },
      {
        "name": "tb-mercancia-peligrosa-controller",
        "endpoints": [
          "DELETE /api/tbmercanciapeligrosas",
          "GET /api/tbmercanciapeligrosas/existById/{id}",
          "GET /api/tbmercanciapeligrosas/findAll",
          "GET /api/tbmercanciapeligrosas/findAllByEstado/{estado}",
          "GET /api/tbmercanciapeligrosas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmercanciapeligrosas/{id}",
          "POST /api/tbmercanciapeligrosas",
          "POST /api/tbmercanciapeligrosas/findAllByCodigoList",
          "POST /api/tbmercanciapeligrosas/findAllByIdList",
          "PUT /api/tbmercanciapeligrosas"
        ]
      },
      {
        "name": "tb-mercancia-peligrosa-regulador-via-controller",
        "endpoints": [
          "DELETE /api/tbmercanciapeligrosareguladorvias",
          "GET /api/tbmercanciapeligrosareguladorvias/existById/{tbMercanciaPeligrosa}/{tbReguladorMercanciaPeligrosa}/{tbViaTransporte}",
          "GET /api/tbmercanciapeligrosareguladorvias/findAllByCodigoMercanciaAndCodigoViaNgSelect/{codigoMercancia}/{codigoVia}",
          "GET /api/tbmercanciapeligrosareguladorvias/findAllByIdMercanciaPeligrosa/{idMercanciaPeligrosa}",
          "GET /api/tbmercanciapeligrosareguladorvias/{tbMercanciaPeligrosa}/{tbReguladorMercanciaPeligrosa}/{tbViaTransporte}",
          "POST /api/tbmercanciapeligrosareguladorvias",
          "POST /api/tbmercanciapeligrosareguladorvias/findCustomDto",
          "POST /api/tbmercanciapeligrosareguladorvias/insertAndDeleteAllCustom",
          "PUT /api/tbmercanciapeligrosareguladorvias"
        ]
      },
      {
        "name": "tb-metodo-envio-api-controller",
        "endpoints": [
          "DELETE /api/tbmetodoenvioapis",
          "GET /api/tbmetodoenvioapis/findAll",
          "GET /api/tbmetodoenvioapis/findAllByEstado/{estado}",
          "GET /api/tbmetodoenvioapis/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmetodoenvioapis/findByCodigo/{codigo}",
          "GET /api/tbmetodoenvioapis/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbmetodoenvioapis/{id}",
          "POST /api/tbmetodoenvioapis",
          "POST /api/tbmetodoenvioapis/findAllByIdList",
          "PUT /api/tbmetodoenvioapis"
        ]
      },
      {
        "name": "tb-modalidad-financiamiento-controller",
        "endpoints": [
          "DELETE /api/tbmodalidadfinanciamientos",
          "GET /api/tbmodalidadfinanciamientos/findAll",
          "GET /api/tbmodalidadfinanciamientos/findAllByEstado/{estado}",
          "GET /api/tbmodalidadfinanciamientos/findByCodigo/{codigo}",
          "GET /api/tbmodalidadfinanciamientos/{id}",
          "POST /api/tbmodalidadfinanciamientos",
          "POST /api/tbmodalidadfinanciamientos/findAllByIdList",
          "PUT /api/tbmodalidadfinanciamientos"
        ]
      },
      {
        "name": "tb-modalidad-pago-controller",
        "endpoints": [
          "DELETE /api/tbmodalidadpagos",
          "GET /api/tbmodalidadpagos/existById/{id}",
          "GET /api/tbmodalidadpagos/findAll",
          "GET /api/tbmodalidadpagos/findAllByEstado/{estado}",
          "GET /api/tbmodalidadpagos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmodalidadpagos/{id}",
          "POST /api/tbmodalidadpagos",
          "POST /api/tbmodalidadpagos/findAllByIdList",
          "PUT /api/tbmodalidadpagos"
        ]
      },
      {
        "name": "tb-modalidad-servicio-prestado-controller",
        "endpoints": [
          "DELETE /api/tbmodalidadservicioprestados",
          "GET /api/tbmodalidadservicioprestados/findAll",
          "GET /api/tbmodalidadservicioprestados/findAllByEstado/{estado}",
          "GET /api/tbmodalidadservicioprestados/{id}",
          "POST /api/tbmodalidadservicioprestados",
          "POST /api/tbmodalidadservicioprestados/findAllByIdList",
          "PUT /api/tbmodalidadservicioprestados"
        ]
      },
      {
        "name": "tb-modalidad-transbordo-controller",
        "endpoints": [
          "DELETE /api/tbmodalidadtransbordos",
          "GET /api/tbmodalidadtransbordos/existById/{id}",
          "GET /api/tbmodalidadtransbordos/findAll",
          "GET /api/tbmodalidadtransbordos/findAllByEstado/{estado}",
          "GET /api/tbmodalidadtransbordos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmodalidadtransbordos/{id}",
          "POST /api/tbmodalidadtransbordos",
          "POST /api/tbmodalidadtransbordos/findAllByIdList",
          "PUT /api/tbmodalidadtransbordos"
        ]
      },
      {
        "name": "tb-modelo-vehiculo-controller",
        "endpoints": [
          "DELETE /api/tbmodelovehiculos",
          "GET /api/tbmodelovehiculos/findAll",
          "GET /api/tbmodelovehiculos/findAllByEstado/{estado}",
          "GET /api/tbmodelovehiculos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmodelovehiculos/findByCodigo/{codigo}",
          "GET /api/tbmodelovehiculos/{id}",
          "POST /api/tbmodelovehiculos",
          "POST /api/tbmodelovehiculos/findAllByCodigoList",
          "POST /api/tbmodelovehiculos/findAllByIdList",
          "PUT /api/tbmodelovehiculos"
        ]
      },
      {
        "name": "tb-moneda-controller",
        "endpoints": [
          "DELETE /api/tbmonedas",
          "GET /api/tbmonedas/existById/{id}",
          "GET /api/tbmonedas/findAll",
          "GET /api/tbmonedas/findAllByEstado/{estado}",
          "GET /api/tbmonedas/findAllByEstadoAndSimboloNotNull/{estado}",
          "GET /api/tbmonedas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbmonedas/findByCodigo/{codigo}",
          "GET /api/tbmonedas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbmonedas/findByCodigoNgSelect/{codigo}",
          "GET /api/tbmonedas/{id}",
          "POST /api/tbmonedas",
          "POST /api/tbmonedas/findAllByCodigoList",
          "POST /api/tbmonedas/findAllByIdList",
          "POST /api/tbmonedas/findAllBySearch",
          "POST /api/tbmonedas/findAllSistemaPaisEstadoNgSelect",
          "PUT /api/tbmonedas"
        ]
      },
      {
        "name": "tb-naturaleza-carga-controller",
        "endpoints": [
          "DELETE /api/tbnaturalezacargas",
          "GET /api/tbnaturalezacargas/existById/{id}",
          "GET /api/tbnaturalezacargas/findAll",
          "GET /api/tbnaturalezacargas/findAllByEstado/{estado}",
          "GET /api/tbnaturalezacargas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbnaturalezacargas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbnaturalezacargas/{id}",
          "POST /api/tbnaturalezacargas",
          "POST /api/tbnaturalezacargas/findAllByCodigoList",
          "POST /api/tbnaturalezacargas/findAllByIdList",
          "PUT /api/tbnaturalezacargas"
        ]
      },
      {
        "name": "tb-nivel-comercial-controller",
        "endpoints": [
          "DELETE /api/tbnivelcomerciales",
          "GET /api/tbnivelcomerciales/existById/{id}",
          "GET /api/tbnivelcomerciales/findAll",
          "GET /api/tbnivelcomerciales/findAllByEstado/{estado}",
          "GET /api/tbnivelcomerciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbnivelcomerciales/{id}",
          "POST /api/tbnivelcomerciales",
          "POST /api/tbnivelcomerciales/findAllByCodigoList",
          "POST /api/tbnivelcomerciales/findAllByIdList",
          "PUT /api/tbnivelcomerciales"
        ]
      },
      {
        "name": "tb-nombre-comercial-vehiculo-controller",
        "endpoints": [
          "DELETE /api/tbnombrecomercialvehiculos",
          "GET /api/tbnombrecomercialvehiculos/findAll",
          "GET /api/tbnombrecomercialvehiculos/findAllByEstado/{estado}",
          "GET /api/tbnombrecomercialvehiculos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbnombrecomercialvehiculos/findByCodigo/{codigo}",
          "GET /api/tbnombrecomercialvehiculos/{id}",
          "POST /api/tbnombrecomercialvehiculos",
          "POST /api/tbnombrecomercialvehiculos/findAllByCodigoList",
          "POST /api/tbnombrecomercialvehiculos/findAllByIdList",
          "PUT /api/tbnombrecomercialvehiculos"
        ]
      },
      {
        "name": "tb-ocupacion-controller",
        "endpoints": [
          "DELETE /api/tbocupaciones",
          "GET /api/tbocupaciones/existById/{id}",
          "GET /api/tbocupaciones/findAll",
          "GET /api/tbocupaciones/findAllByEstado/{estado}",
          "GET /api/tbocupaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbocupaciones/{id}",
          "POST /api/tbocupaciones",
          "POST /api/tbocupaciones/findAllByIdList",
          "PUT /api/tbocupaciones"
        ]
      },
      {
        "name": "tb-padron-clasificacion-contribuyente-controller",
        "endpoints": [
          "DELETE /api/tbpadronclasificacioncontribuyentes",
          "GET /api/tbpadronclasificacioncontribuyentes/existById/{id}",
          "GET /api/tbpadronclasificacioncontribuyentes/findAll",
          "GET /api/tbpadronclasificacioncontribuyentes/findAllByEstado/{estado}",
          "GET /api/tbpadronclasificacioncontribuyentes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbpadronclasificacioncontribuyentes/{id}",
          "POST /api/tbpadronclasificacioncontribuyentes",
          "PUT /api/tbpadronclasificacioncontribuyentes"
        ]
      },
      {
        "name": "tb-pais-controller",
        "endpoints": [
          "DELETE /api/tbpaises",
          "GET /api/tbpaises/existById/{id}",
          "GET /api/tbpaises/findAll",
          "GET /api/tbpaises/findAllByEstado/{estado}",
          "GET /api/tbpaises/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbpaises/findByCodigo/{codigo}",
          "GET /api/tbpaises/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbpaises/{id}",
          "POST /api/tbpaises",
          "POST /api/tbpaises/findAllByCodigoList",
          "POST /api/tbpaises/findAllByIdList",
          "POST /api/tbpaises/findAllByIdMonedaList",
          "PUT /api/tbpaises"
        ]
      },
      {
        "name": "tb-parametro-controller",
        "endpoints": [
          "DELETE /api/tbparametros",
          "GET /api/tbparametros/existById/{id}",
          "GET /api/tbparametros/findAll",
          "GET /api/tbparametros/findAllByIdSistema/{idSistema}",
          "GET /api/tbparametros/findAllByIdSistemaAndCtrlConfigurablePerfil/{idSistema}/{ctrlConfigurablePerfil}",
          "GET /api/tbparametros/findAllByIdSistemaAndCtrlSeguridadAndCtrlPrivado/{idSistema}/{ctrlSeguridad}/{ctrlPrivado}",
          "GET /api/tbparametros/findAllByIdSistemaAndPrefixCodigo/{idSistema}/{prefixCodigo}",
          "GET /api/tbparametros/findByCodigoSistemaAndCodigo/{codigoSistema}/{codigo}",
          "GET /api/tbparametros/{id}",
          "POST /api/tbparametros",
          "POST /api/tbparametros/findAllByCodigoSistemaAndCodigoList/{codigoSistema}",
          "POST /api/tbparametros/findAllByIdList",
          "PUT /api/tbparametros",
          "PUT /api/tbparametros/updateValorParametros"
        ]
      },
      {
        "name": "tb-parametro-general-controller",
        "endpoints": [
          "DELETE /api/tbparametrogenerales",
          "GET /api/tbparametrogenerales/findAll",
          "GET /api/tbparametrogenerales/findAllByEstado/{estado}",
          "GET /api/tbparametrogenerales/findByCodigo/{codigo}",
          "GET /api/tbparametrogenerales/findByCodigoAndCodigoSistema/{codigo}/{codSistema}",
          "GET /api/tbparametrogenerales/{id}",
          "POST /api/tbparametrogenerales",
          "POST /api/tbparametrogenerales/findAllByCodigoList",
          "PUT /api/tbparametrogenerales"
        ]
      },
      {
        "name": "tb-partida-codigo-producto-sunat-controller",
        "endpoints": [
          "DELETE /api/tbpartidacodigoproductosunates",
          "GET /api/tbpartidacodigoproductosunates/findAll",
          "GET /api/tbpartidacodigoproductosunates/findByNroPartida/{nroPartida}",
          "GET /api/tbpartidacodigoproductosunates/{id}",
          "POST /api/tbpartidacodigoproductosunates",
          "PUT /api/tbpartidacodigoproductosunates"
        ]
      },
      {
        "name": "tb-patrimonio-neto-controller",
        "endpoints": [
          "DELETE /api/tbpatrimonionetos/{id}",
          "GET /api/tbpatrimonionetos/findAll",
          "GET /api/tbpatrimonionetos/findAllByCodigos",
          "GET /api/tbpatrimonionetos/findAllByEstado/{estado}",
          "GET /api/tbpatrimonionetos/findByCodigo/{codigo}",
          "GET /api/tbpatrimonionetos/{id}",
          "POST /api/tbpatrimonionetos",
          "POST /api/tbpatrimonionetos/findAllByIdList",
          "PUT /api/tbpatrimonionetos/{id}"
        ]
      },
      {
        "name": "tb-plataforma-conexion-controller",
        "endpoints": [
          "DELETE /api/tbplataformaconexiones",
          "GET /api/tbplataformaconexiones/findAll",
          "GET /api/tbplataformaconexiones/findAllByEstado/{estado}",
          "GET /api/tbplataformaconexiones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbplataformaconexiones/findByCodigo/{codigo}",
          "GET /api/tbplataformaconexiones/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbplataformaconexiones/{id}",
          "POST /api/tbplataformaconexiones",
          "POST /api/tbplataformaconexiones/findAllByIdList",
          "PUT /api/tbplataformaconexiones"
        ]
      },
      {
        "name": "tb-plataforma-sunat-controller",
        "endpoints": [
          "DELETE /api/tbplataformasunates",
          "GET /api/tbplataformasunates/findAll",
          "GET /api/tbplataformasunates/findAllByEstado/{estado}",
          "GET /api/tbplataformasunates/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbplataformasunates/findAllByIdList",
          "GET /api/tbplataformasunates/{id}",
          "POST /api/tbplataformasunates",
          "PUT /api/tbplataformasunates"
        ]
      },
      {
        "name": "tb-porcentaje-gradualidad-controller",
        "endpoints": [
          "DELETE /api/tbporcentajegradualidades",
          "GET /api/tbporcentajegradualidades/findAllByEstado/{estado}",
          "GET /api/tbporcentajegradualidades/{id}",
          "POST /api/tbporcentajegradualidades",
          "POST /api/tbporcentajegradualidades/findAllByIdList",
          "PUT /api/tbporcentajegradualidades"
        ]
      },
      {
        "name": "tb-porcentaje-incentivo-controller",
        "endpoints": [
          "DELETE /api/tbporcentajeincentivos",
          "GET /api/tbporcentajeincentivos/findAllByEstado/{estado}",
          "GET /api/tbporcentajeincentivos/{id}",
          "POST /api/tbporcentajeincentivos",
          "PUT /api/tbporcentajeincentivos"
        ]
      },
      {
        "name": "tb-proceso-controller",
        "endpoints": [
          "DELETE /api/tbprocesos",
          "GET /api/tbprocesos/existById/{id}",
          "GET /api/tbprocesos/findAll",
          "GET /api/tbprocesos/findAllBySistemaAndEstado/{idSistema}",
          "GET /api/tbprocesos/{id}",
          "POST /api/tbprocesos",
          "POST /api/tbprocesos/findAllByIdList",
          "PUT /api/tbprocesos"
        ]
      },
      {
        "name": "tb-proveedor-controller",
        "endpoints": [
          "GET /api/tbproveedores/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-rebaja-lineamiento-controller",
        "endpoints": [
          "DELETE /api/tbrebajalineamientos",
          "GET /api/tbrebajalineamientos/findAllByEstado/{estado}",
          "GET /api/tbrebajalineamientos/{id}",
          "POST /api/tbrebajalineamientos",
          "PUT /api/tbrebajalineamientos"
        ]
      },
      {
        "name": "tb-red-agente-controller",
        "endpoints": [
          "DELETE /api/tbredagentes",
          "GET /api/tbredagentes/findAll",
          "GET /api/tbredagentes/findAllByEstado/{estado}",
          "GET /api/tbredagentes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbredagentes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbredagentes/findCount",
          "GET /api/tbredagentes/{id}",
          "POST /api/tbredagentes",
          "POST /api/tbredagentes/findAllByCodigoList",
          "POST /api/tbredagentes/findAllByIdList",
          "PUT /api/tbredagentes"
        ]
      },
      {
        "name": "tb-regimen-aduanero-controller",
        "endpoints": [
          "DELETE /api/tbregimenaduaneros",
          "GET /api/tbregimenaduaneros/existById/{id}",
          "GET /api/tbregimenaduaneros/findAll",
          "GET /api/tbregimenaduaneros/findAllByCtrlDrawbackFranquicia/{ctrl}",
          "GET /api/tbregimenaduaneros/findAllByCtrlDrawbackFranquiciaNgSelect/{ctrl}/{estado}",
          "GET /api/tbregimenaduaneros/findAllByEstado/{estado}",
          "GET /api/tbregimenaduaneros/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbregimenaduaneros/findAllByIdTipoRegimenAduaneroAndEstadoNgSelect/{idTipoRegimenAduanero}/{estado}",
          "GET /api/tbregimenaduaneros/findAllByTipoAndEstado/{idTipoRegimen}/{estado}",
          "GET /api/tbregimenaduaneros/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbregimenaduaneros/{id}",
          "POST /api/tbregimenaduaneros",
          "POST /api/tbregimenaduaneros/findAllByCodigoList",
          "POST /api/tbregimenaduaneros/findAllByIdList",
          "PUT /api/tbregimenaduaneros"
        ]
      },
      {
        "name": "tb-regimen-aduanero-tipo-documento-oficial-controller",
        "endpoints": [
          "DELETE /api/tbregimenaduanerotipodocumentooficiales",
          "GET /api/tbregimenaduanerotipodocumentooficiales/findAllByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/tbregimenaduanerotipodocumentooficiales/findAllByIdRegimenAduaneroCustom/{idRegimenAduanero}",
          "GET /api/tbregimenaduanerotipodocumentooficiales/{tbRegimenAduanero}/{tbTipoDocumentoOficial}",
          "POST /api/tbregimenaduanerotipodocumentooficiales",
          "PUT /api/tbregimenaduanerotipodocumentooficiales"
        ]
      },
      {
        "name": "tb-regimen-aduanero-tipo-transaccion-aduanera-controller",
        "endpoints": [
          "DELETE /api/tbregimenaduanerotipotransaccionaduaneras",
          "GET /api/tbregimenaduanerotipotransaccionaduaneras/existById/{tbRegimenAduanero}/{tbTipoTransaccionAduanera}",
          "GET /api/tbregimenaduanerotipotransaccionaduaneras/findAllByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/tbregimenaduanerotipotransaccionaduaneras/findAllByIdRegimenAduaneroCustom/{idRegimenAduanero}",
          "GET /api/tbregimenaduanerotipotransaccionaduaneras/{tbRegimenAduanero}/{tbTipoTransaccionAduanera}",
          "POST /api/tbregimenaduanerotipotransaccionaduaneras",
          "POST /api/tbregimenaduanerotipotransaccionaduaneras/findAllByCodigoRegimenAduaneroAndCodigoTipoTransaccionAduaneraList/{codigoRegimenAduanero}",
          "POST /api/tbregimenaduanerotipotransaccionaduaneras/insertAndDeleteAllCustom",
          "PUT /api/tbregimenaduanerotipotransaccionaduaneras"
        ]
      },
      {
        "name": "tb-regimen-tributario-controller",
        "endpoints": [
          "DELETE /api/tbregimentributarios",
          "GET /api/tbregimentributarios/existById/{id}",
          "GET /api/tbregimentributarios/findAll",
          "GET /api/tbregimentributarios/findAllByEstado/{estado}",
          "GET /api/tbregimentributarios/findByCodigo/{codigo}",
          "GET /api/tbregimentributarios/{id}",
          "POST /api/tbregimentributarios",
          "POST /api/tbregimentributarios/findAllByCodigoList",
          "POST /api/tbregimentributarios/findAllByIdList",
          "PUT /api/tbregimentributarios"
        ]
      },
      {
        "name": "tb-regulador-mercancia-peligrosa-controller",
        "endpoints": [
          "DELETE /api/tbreguladormercanciapeligrosas",
          "GET /api/tbreguladormercanciapeligrosas/existById/{id}",
          "GET /api/tbreguladormercanciapeligrosas/findAll",
          "GET /api/tbreguladormercanciapeligrosas/findAllByEstado/{estado}",
          "GET /api/tbreguladormercanciapeligrosas/{id}",
          "POST /api/tbreguladormercanciapeligrosas",
          "POST /api/tbreguladormercanciapeligrosas/findAllByIdList",
          "PUT /api/tbreguladormercanciapeligrosas"
        ]
      },
      {
        "name": "tb-reporte-campo-controller",
        "endpoints": [
          "DELETE /api/tbreportecampos",
          "GET /api/tbreportecampos/findAll",
          "GET /api/tbreportecampos/findAllByEstado/{estado}",
          "GET /api/tbreportecampos/findAllByReporteAndSistema",
          "GET /api/tbreportecampos/findByCodigoTbReporte/{codigo}",
          "GET /api/tbreportecampos/{id}",
          "POST /api/tbreportecampos",
          "POST /api/tbreportecampos/findAllByIdList",
          "POST /api/tbreportecampos/findAllByIdListCustom",
          "PUT /api/tbreportecampos"
        ]
      },
      {
        "name": "tb-reporte-configuracion-controller",
        "endpoints": [
          "DELETE /api/tbreporteconfiguraciones",
          "GET /api/tbreporteconfiguraciones/{id}",
          "POST /api/tbreporteconfiguraciones",
          "PUT /api/tbreporteconfiguraciones"
        ]
      },
      {
        "name": "tb-reporte-controller",
        "endpoints": [
          "DELETE /api/tbreportes",
          "GET /api/tbreportes/findAll",
          "GET /api/tbreportes/findAllByEstado/{estado}",
          "GET /api/tbreportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbreportes/findAllBySistema/{idSistema}",
          "GET /api/tbreportes/findByCodigo/{codigo}",
          "GET /api/tbreportes/findByCodigoAndCodigoSistema/{codigo}/{codigoSistema}",
          "GET /api/tbreportes/{id}",
          "POST /api/tbreportes",
          "POST /api/tbreportes/findAllByCodigoList",
          "POST /api/tbreportes/findAllByIdList",
          "POST /api/tbreportes/insert",
          "POST /api/tbreportes/update",
          "PUT /api/tbreportes"
        ]
      },
      {
        "name": "tb-reporte-total-controller",
        "endpoints": [
          "DELETE /api/tbreportetotales",
          "GET /api/tbreportetotales/findAllByIdReporte/{idReporte}",
          "GET /api/tbreportetotales/{id}",
          "POST /api/tbreportetotales",
          "POST /api/tbreportetotales/insertAll",
          "PUT /api/tbreportetotales"
        ]
      },
      {
        "name": "tb-ruta-documento-atributo-controller",
        "endpoints": [
          "DELETE /api/tbrutadocumentoatributos",
          "GET /api/tbrutadocumentoatributos/findAllByTbRutaDocumento/{idRutaDocumento}",
          "GET /api/tbrutadocumentoatributos/findAllSgdAtributoByIdRutaDocumento/{idRutaDocumento}",
          "GET /api/tbrutadocumentoatributos/findByCodigoSgdModuloAtributo/{codigo}",
          "GET /api/tbrutadocumentoatributos/{tbRutaDocumento}/{idAtributo}",
          "POST /api/tbrutadocumentoatributos",
          "POST /api/tbrutadocumentoatributos/insertAndDeleteAllCustom",
          "PUT /api/tbrutadocumentoatributos"
        ]
      },
      {
        "name": "tb-ruta-documento-controller",
        "endpoints": [
          "DELETE /api/tbrutadocumentos",
          "DELETE /api/tbrutadocumentos/deleteAll",
          "GET /api/tbrutadocumentos/findAll",
          "GET /api/tbrutadocumentos/findAllByIdSistema/{id}",
          "GET /api/tbrutadocumentos/findAllByIdSistemaCustom/{id}",
          "GET /api/tbrutadocumentos/findAllByIdSistemaCustom2/{id}",
          "GET /api/tbrutadocumentos/findAllCustom",
          "GET /api/tbrutadocumentos/findByCodigoCustom/{codigo}",
          "GET /api/tbrutadocumentos/{id}",
          "POST /api/tbrutadocumentos",
          "POST /api/tbrutadocumentos/findAllByIdList",
          "PUT /api/tbrutadocumentos"
        ]
      },
      {
        "name": "tb-serie-guia-remision-controller",
        "endpoints": [
          "DELETE /api/tbserieguiaremisiones",
          "GET /api/tbserieguiaremisiones/findAll",
          "GET /api/tbserieguiaremisiones/findAllByEstado/{estado}",
          "GET /api/tbserieguiaremisiones/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/tbserieguiaremisiones/findAllByTipoEmisionAndEstado/{tipoEmision}/{estado}",
          "GET /api/tbserieguiaremisiones/findByIdCustom/{id}",
          "GET /api/tbserieguiaremisiones/{id}",
          "POST /api/tbserieguiaremisiones",
          "POST /api/tbserieguiaremisiones/findAllByIdList",
          "POST /api/tbserieguiaremisiones/findAllBySearch",
          "PUT /api/tbserieguiaremisiones"
        ]
      },
      {
        "name": "tb-servicio-proveedor-logistico-controller",
        "endpoints": [
          "DELETE /api/tbservicioproveedorlogisticos",
          "GET /api/tbservicioproveedorlogisticos/findAll",
          "GET /api/tbservicioproveedorlogisticos/findAllByEstado/{estado}",
          "GET /api/tbservicioproveedorlogisticos/findByCodigo/{codigo}",
          "POST /api/tbservicioproveedorlogisticos",
          "POST /api/tbservicioproveedorlogisticos/findAllByCodigoList",
          "POST /api/tbservicioproveedorlogisticos/findAllByIdList",
          "PUT /api/tbservicioproveedorlogisticos"
        ]
      },
      {
        "name": "tb-subtipo-combustible-controller",
        "endpoints": [
          "DELETE /api/tbsubtipocombustibles",
          "GET /api/tbsubtipocombustibles/existById/{id}",
          "GET /api/tbsubtipocombustibles/findAll",
          "GET /api/tbsubtipocombustibles/findAllByEstado/{estado}",
          "GET /api/tbsubtipocombustibles/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbsubtipocombustibles/{id}",
          "POST /api/tbsubtipocombustibles",
          "POST /api/tbsubtipocombustibles/findAllByIdList",
          "PUT /api/tbsubtipocombustibles"
        ]
      },
      {
        "name": "tb-subtipo-contenedor-controller",
        "endpoints": [
          "DELETE /api/tbsubtipocontenedores",
          "GET /api/tbsubtipocontenedores/existById/{id}",
          "GET /api/tbsubtipocontenedores/findAll",
          "GET /api/tbsubtipocontenedores/findAllByCodigoLikeEstadoNgSelect/{codigo}/{estado}",
          "GET /api/tbsubtipocontenedores/findAllByEstado/{estado}",
          "GET /api/tbsubtipocontenedores/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbsubtipocontenedores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbsubtipocontenedores/{id}",
          "POST /api/tbsubtipocontenedores",
          "POST /api/tbsubtipocontenedores/findAllByCodigoList",
          "POST /api/tbsubtipocontenedores/findAllByIdList",
          "PUT /api/tbsubtipocontenedores"
        ]
      },
      {
        "name": "tb-sueldo-minimo-controller",
        "endpoints": [
          "GET /api/tbsueldominimos/monto/{date}"
        ]
      },
      {
        "name": "tb-tamex-controller",
        "endpoints": [
          "DELETE /api/tbtamexes",
          "GET /api/tbtamexes/findAllByFchTamex/{fchTamex}",
          "GET /api/tbtamexes/{id}",
          "POST /api/tbtamexes",
          "POST /api/tbtamexes/findAllByFilter",
          "PUT /api/tbtamexes"
        ]
      },
      {
        "name": "tb-tecnologia-atmosfera-controlada-controller",
        "endpoints": [
          "GET /api/tbtecnologiaatmosferacontroladas/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-terminal-portuario-controller",
        "endpoints": [
          "GET /api/tbterminalportuarios/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-tipo-afectacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoafectaciones",
          "GET /api/tbtipoafectaciones/existById/{id}",
          "GET /api/tbtipoafectaciones/findAll",
          "GET /api/tbtipoafectaciones/findAllByEstado/{estado}",
          "GET /api/tbtipoafectaciones/findAllByEstadoCustom/{estado}",
          "GET /api/tbtipoafectaciones/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoafectaciones/findAllByGratuito/{gratuito}",
          "GET /api/tbtipoafectaciones/findAllByGratuitoCustom/{gratuito}",
          "GET /api/tbtipoafectaciones/findAllByIdTipoVentaAndEstado/{idTipoVenta}/{estado}",
          "GET /api/tbtipoafectaciones/findAllCustom",
          "GET /api/tbtipoafectaciones/findByCodigo/{codigo}",
          "GET /api/tbtipoafectaciones/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipoafectaciones/findByCodigoCustom/{codigo}",
          "GET /api/tbtipoafectaciones/findByIdCustom/{id}",
          "GET /api/tbtipoafectaciones/findByIdNgSelect/{id}",
          "GET /api/tbtipoafectaciones/{id}",
          "POST /api/tbtipoafectaciones",
          "POST /api/tbtipoafectaciones/findAllByCodigoList",
          "POST /api/tbtipoafectaciones/findAllByIdList",
          "POST /api/tbtipoafectaciones/findAllBySearch",
          "PUT /api/tbtipoafectaciones"
        ]
      },
      {
        "name": "tb-tipo-afectacion-destinacion-compra-controller",
        "endpoints": [
          "DELETE /api/tbtipoafectaciondestinacioncompras",
          "GET /api/tbtipoafectaciondestinacioncompras/existById/{tbTipoAfectacion}/{scoDestinacionCompra}",
          "GET /api/tbtipoafectaciondestinacioncompras/findAllByIdDestinacionCompra/{idDestinacionCompra}",
          "GET /api/tbtipoafectaciondestinacioncompras/findAllScoDestinacionCompraByCodigoTipoAfectacionAndEstado/{codigoTipoAfectacion}/{estado}",
          "GET /api/tbtipoafectaciondestinacioncompras/{tbTipoAfectacion}/{scoDestinacionCompra}",
          "POST /api/tbtipoafectaciondestinacioncompras",
          "POST /api/tbtipoafectaciondestinacioncompras/findAllByIdTipoAfectacionList",
          "POST /api/tbtipoafectaciondestinacioncompras/insertAndDeleteAllCustom",
          "PUT /api/tbtipoafectaciondestinacioncompras"
        ]
      },
      {
        "name": "tb-tipo-archivo-controller",
        "endpoints": [
          "DELETE /api/tbtipoarchivos",
          "GET /api/tbtipoarchivos/findAll",
          "GET /api/tbtipoarchivos/findAllByEstado/{estado}",
          "GET /api/tbtipoarchivos/{id}",
          "POST /api/tbtipoarchivos",
          "POST /api/tbtipoarchivos/findAllByIdList",
          "PUT /api/tbtipoarchivos"
        ]
      },
      {
        "name": "tb-tipo-autoliquidacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoautoliquidaciones",
          "GET /api/tbtipoautoliquidaciones/findAllByEstado/{estado}",
          "GET /api/tbtipoautoliquidaciones/{id}",
          "POST /api/tbtipoautoliquidaciones",
          "POST /api/tbtipoautoliquidaciones/findAllByIdList",
          "PUT /api/tbtipoautoliquidaciones"
        ]
      },
      {
        "name": "tb-tipo-bulto-controller",
        "endpoints": [
          "DELETE /api/tbtipobultos",
          "GET /api/tbtipobultos/existById/{id}",
          "GET /api/tbtipobultos/findAll",
          "GET /api/tbtipobultos/findAllByEstado/{estado}",
          "GET /api/tbtipobultos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipobultos/findByCodigo/{codigo}",
          "GET /api/tbtipobultos/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipobultos/findByCodigoNgSelect/{codigo}",
          "GET /api/tbtipobultos/{id}",
          "POST /api/tbtipobultos",
          "POST /api/tbtipobultos/findAllByCodigoList",
          "POST /api/tbtipobultos/findAllByIdList",
          "PUT /api/tbtipobultos"
        ]
      },
      {
        "name": "tb-tipo-calculo-sobreestadia-controller",
        "endpoints": [
          "DELETE /api/tbtipocalculosobreestadias",
          "GET /api/tbtipocalculosobreestadias/findAllByEstado/{estado}",
          "GET /api/tbtipocalculosobreestadias/{id}",
          "POST /api/tbtipocalculosobreestadias",
          "POST /api/tbtipocalculosobreestadias/findAllByIdList",
          "PUT /api/tbtipocalculosobreestadias"
        ]
      },
      {
        "name": "tb-tipo-cambio-controller",
        "endpoints": [
          "DELETE /api/tbtipocambios",
          "GET /api/tbtipocambios/existById/{id}",
          "GET /api/tbtipocambios/findAllByFchCambio/{fchCambio}",
          "GET /api/tbtipocambios/findLatestByCodMonedaToPen/{codMoneda}",
          "GET /api/tbtipocambios/findLatestByMonthByCodMoneda/{codMoneda}",
          "GET /api/tbtipocambios/{id}",
          "POST /api/tbtipocambios",
          "POST /api/tbtipocambios/deleteAll",
          "POST /api/tbtipocambios/findAllByFilter",
          "POST /api/tbtipocambios/findAllByIdList",
          "POST /api/tbtipocambios/findAllByMonedaAndFchCambio",
          "POST /api/tbtipocambios/findAllBySearchCustom",
          "POST /api/tbtipocambios/findAllMonedaTipoCambioSunat",
          "POST /api/tbtipocambios/findBySistemaAndFecha",
          "POST /api/tbtipocambios/findByTmpDto",
          "POST /api/tbtipocambios/findCustomDto",
          "POST /api/tbtipocambios/findLatestByCodMonedaListToPen",
          "POST /api/tbtipocambios/findLatestByMonedaAndFchCambio",
          "POST /api/tbtipocambios/findListLatestByMonedaAndFchCambio",
          "POST /api/tbtipocambios/findValorByIdMonedaAndIdMonedaConversionAndFchCambio",
          "PUT /api/tbtipocambios",
          "PUT /api/tbtipocambios/updateAllByFactorCustom"
        ]
      },
      {
        "name": "tb-tipo-carga-controller",
        "endpoints": [
          "DELETE /api/tbtipocargas",
          "GET /api/tbtipocargas/existById/{id}",
          "GET /api/tbtipocargas/findAll",
          "GET /api/tbtipocargas/findAllByEstado/{estado}",
          "GET /api/tbtipocargas/findAllByIdTipoEnvioAndEstado/{idTipoEnvio}/{estado}",
          "GET /api/tbtipocargas/findByCodigo/{codigo}",
          "GET /api/tbtipocargas/{id}",
          "POST /api/tbtipocargas",
          "POST /api/tbtipocargas/findAllByIdList",
          "PUT /api/tbtipocargas"
        ]
      },
      {
        "name": "tb-tipo-certificado-vehicular-controller",
        "endpoints": [
          "DELETE /api/tbtipocertificadovehiculares",
          "GET /api/tbtipocertificadovehiculares/existById/{id}",
          "GET /api/tbtipocertificadovehiculares/findAll",
          "GET /api/tbtipocertificadovehiculares/{id}",
          "POST /api/tbtipocertificadovehiculares",
          "POST /api/tbtipocertificadovehiculares/findAllByIdList",
          "PUT /api/tbtipocertificadovehiculares"
        ]
      },
      {
        "name": "tb-tipo-combustible-controller",
        "endpoints": [
          "DELETE /api/tbtipocombustibles",
          "GET /api/tbtipocombustibles/existById/{id}",
          "GET /api/tbtipocombustibles/findAll",
          "GET /api/tbtipocombustibles/findAllByEstado/{estado}",
          "GET /api/tbtipocombustibles/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipocombustibles/findAllByEstadoNgSelectCustom/{estado}",
          "GET /api/tbtipocombustibles/{id}",
          "POST /api/tbtipocombustibles",
          "POST /api/tbtipocombustibles/findAllByCodigoList",
          "POST /api/tbtipocombustibles/findAllByIdList",
          "PUT /api/tbtipocombustibles"
        ]
      },
      {
        "name": "tb-tipo-componente-controller",
        "endpoints": [
          "DELETE /api/tbtipocomponentes",
          "GET /api/tbtipocomponentes/{id}",
          "POST /api/tbtipocomponentes",
          "PUT /api/tbtipocomponentes"
        ]
      },
      {
        "name": "tb-tipo-comprobante-configuracion-controller",
        "endpoints": [
          "DELETE /api/tbtipocomprobanteconfiguraciones",
          "GET /api/tbtipocomprobanteconfiguraciones/existById/{id}",
          "GET /api/tbtipocomprobanteconfiguraciones/findAll",
          "GET /api/tbtipocomprobanteconfiguraciones/findAllByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/tbtipocomprobanteconfiguraciones/findAllByTipoComprobanteAndTipoComprobanteAfecto/{idTipoComprobante}/{idTipoComprobanteAfecto}",
          "GET /api/tbtipocomprobanteconfiguraciones/findAllByTipoEmision/{tipoEmision}",
          "GET /api/tbtipocomprobanteconfiguraciones/findByTipoComprobanteAndTipoEmisionComprobanteAndCanalEmisionComprobante",
          "GET /api/tbtipocomprobanteconfiguraciones/{id}",
          "POST /api/tbtipocomprobanteconfiguraciones",
          "POST /api/tbtipocomprobanteconfiguraciones/findAllBySearch",
          "POST /api/tbtipocomprobanteconfiguraciones/findByIdList",
          "PUT /api/tbtipocomprobanteconfiguraciones"
        ]
      },
      {
        "name": "tb-tipo-comprobante-controller",
        "endpoints": [
          "DELETE /api/tbtipocomprobantes",
          "DELETE /api/tbtipocomprobantes/deleteList",
          "GET /api/tbtipocomprobantes/existByCodigo/{codigo}",
          "GET /api/tbtipocomprobantes/existById/{id}",
          "GET /api/tbtipocomprobantes/findAll",
          "GET /api/tbtipocomprobantes/findAllByCodigoTipoRelacion/{codTipoRelacion}",
          "GET /api/tbtipocomprobantes/findAllByEstado/{estado}",
          "GET /api/tbtipocomprobantes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipocomprobantes/findAllByTributarioAndEstado/{tributario}/{estado}",
          "GET /api/tbtipocomprobantes/findByCodigo/{codigo}",
          "GET /api/tbtipocomprobantes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipocomprobantes/{id}",
          "POST /api/tbtipocomprobantes",
          "POST /api/tbtipocomprobantes/findAllByCodigoList",
          "POST /api/tbtipocomprobantes/findAllByEstadoAndCodigoList/{estado}",
          "POST /api/tbtipocomprobantes/findAllByIdList",
          "PUT /api/tbtipocomprobantes"
        ]
      },
      {
        "name": "tb-tipo-comprobante-tipo-compra-controller",
        "endpoints": [
          "DELETE /api/tbtipocomprobantetipocompras",
          "GET /api/tbtipocomprobantetipocompras/existById/{tbTipoComprobante}/{scoTipoCompra}",
          "GET /api/tbtipocomprobantetipocompras/findAllIdByIdTipoComprobante/{idTipoComprobante}",
          "GET /api/tbtipocomprobantetipocompras/{tbTipoComprobante}/{scoTipoCompra}",
          "POST /api/tbtipocomprobantetipocompras",
          "POST /api/tbtipocomprobantetipocompras/insertAndDeleteAllCustom",
          "PUT /api/tbtipocomprobantetipocompras"
        ]
      },
      {
        "name": "tb-tipo-concepto-controller",
        "endpoints": [
          "DELETE /api/tbtipoconceptos",
          "GET /api/tbtipoconceptos/existById/{id}",
          "GET /api/tbtipoconceptos/findAll",
          "GET /api/tbtipoconceptos/findAllByEstado/{estado}",
          "GET /api/tbtipoconceptos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoconceptos/findByCodigo/{codigo}",
          "GET /api/tbtipoconceptos/findIdByCodigo/{codigo}",
          "GET /api/tbtipoconceptos/{id}",
          "POST /api/tbtipoconceptos",
          "POST /api/tbtipoconceptos/findAllByCodigoList",
          "POST /api/tbtipoconceptos/findAllByIdList",
          "POST /api/tbtipoconceptos/findAllIdByCodigoList",
          "PUT /api/tbtipoconceptos"
        ]
      },
      {
        "name": "tb-tipo-configuracion-sunat-controller",
        "endpoints": [
          "DELETE /api/tbtipoconfiguracionsunates",
          "GET /api/tbtipoconfiguracionsunates/findAll",
          "GET /api/tbtipoconfiguracionsunates/findAllByEstado/{estado}",
          "GET /api/tbtipoconfiguracionsunates/findAllByIdSistemaAndEstado/{idSistema}/{estado}",
          "GET /api/tbtipoconfiguracionsunates/findByCodigo/{codigo}",
          "GET /api/tbtipoconfiguracionsunates/{id}",
          "POST /api/tbtipoconfiguracionsunates",
          "POST /api/tbtipoconfiguracionsunates/findAllByIdList",
          "POST /api/tbtipoconfiguracionsunates/findAllBySearch",
          "PUT /api/tbtipoconfiguracionsunates"
        ]
      },
      {
        "name": "tb-tipo-contenedor-controller",
        "endpoints": [
          "DELETE /api/tbtipocontenedores",
          "GET /api/tbtipocontenedores/existById/{id}",
          "GET /api/tbtipocontenedores/findAll",
          "GET /api/tbtipocontenedores/findAllByEstado/{estado}",
          "GET /api/tbtipocontenedores/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipocontenedores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipocontenedores/{id}",
          "POST /api/tbtipocontenedores",
          "POST /api/tbtipocontenedores/findAllByCodigoList",
          "POST /api/tbtipocontenedores/findAllByIdList",
          "PUT /api/tbtipocontenedores"
        ]
      },
      {
        "name": "tb-tipo-contribuyente-controller",
        "endpoints": [
          "DELETE /api/tbtipocontribuyentes",
          "GET /api/tbtipocontribuyentes/existById/{id}",
          "GET /api/tbtipocontribuyentes/findAll",
          "GET /api/tbtipocontribuyentes/findAllByEstado/{estado}",
          "GET /api/tbtipocontribuyentes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipocontribuyentes/findByCodigo/{codigo}",
          "GET /api/tbtipocontribuyentes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipocontribuyentes/{id}",
          "POST /api/tbtipocontribuyentes",
          "POST /api/tbtipocontribuyentes/findAllByCodigoList",
          "POST /api/tbtipocontribuyentes/findAllByIdList",
          "PUT /api/tbtipocontribuyentes"
        ]
      },
      {
        "name": "tb-tipo-contribuyente-tipo-documento-controller",
        "endpoints": [
          "DELETE /api/tbtipocontribuyentetipodocumentos",
          "GET /api/tbtipocontribuyentetipodocumentos/existById/{tipoEntidad}/{idTipoContribuyente}/{idTipoDocumento}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllByIdTipoContribuyente/{idTipoContribuyente}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllByIdTipoContribuyenteAndTipoEntidad/{idTipoContribuyente}/{tipoEntidad}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllByIdTipoContribuyenteNgSelect/{idTipoContribuyente}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllByTipoContribuyenteNgSelect/{idTipoContribuyente}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllByTipoEntidad/{tipoEntidad}",
          "GET /api/tbtipocontribuyentetipodocumentos/findAllTbTipoDocumentoByIdTipoContribuyenteAndTipoEntidadNgSelect/{idTipoContribuyente}/{tipoEntidad}",
          "GET /api/tbtipocontribuyentetipodocumentos/{tipoEntidad}/{tbTipoContribuyente}/{tbTipoDocumento}",
          "POST /api/tbtipocontribuyentetipodocumentos",
          "POST /api/tbtipocontribuyentetipodocumentos/insertAndDeleteAllCustom",
          "PUT /api/tbtipocontribuyentetipodocumentos"
        ]
      },
      {
        "name": "tb-tipo-cuenta-banco-controller",
        "endpoints": [
          "DELETE /api/tbtipocuentabancos",
          "GET /api/tbtipocuentabancos/findAll",
          "GET /api/tbtipocuentabancos/findAllByEstado/{estado}",
          "GET /api/tbtipocuentabancos/findByCodigo/{codigo}",
          "GET /api/tbtipocuentabancos/{id}",
          "POST /api/tbtipocuentabancos",
          "POST /api/tbtipocuentabancos/findAllByCodigoList",
          "POST /api/tbtipocuentabancos/findAllByGrupoTipoCuentaList",
          "POST /api/tbtipocuentabancos/findAllByIdList",
          "PUT /api/tbtipocuentabancos"
        ]
      },
      {
        "name": "tb-tipo-despacho-controller",
        "endpoints": [
          "DELETE /api/tbtipodespachos",
          "GET /api/tbtipodespachos/existById/{id}",
          "GET /api/tbtipodespachos/findAll",
          "GET /api/tbtipodespachos/findAllByEstado/{estado}",
          "GET /api/tbtipodespachos/findAllByIdRegimenAduanero/{idRegimenAduanero}",
          "GET /api/tbtipodespachos/findAllByIdRegimenAduaneroAndEstado/{idRegimenAduanero}/{estado}",
          "GET /api/tbtipodespachos/findAllByIdRegimenAduaneroAndEstadoNgSelect/{idRegimenAduanero}/{estado}",
          "GET /api/tbtipodespachos/findByCodigoAndCodigoRegimenAduanero/{codigo}/{codigoRegimenAduanero}",
          "GET /api/tbtipodespachos/{id}",
          "POST /api/tbtipodespachos",
          "POST /api/tbtipodespachos/findAllByCodigoList",
          "POST /api/tbtipodespachos/findAllByIdList",
          "PUT /api/tbtipodespachos"
        ]
      },
      {
        "name": "tb-tipo-destinacion-controller",
        "endpoints": [
          "DELETE /api/tbtipodestinaciones",
          "GET /api/tbtipodestinaciones/existById/{id}",
          "GET /api/tbtipodestinaciones/findAll",
          "GET /api/tbtipodestinaciones/findAllByCodigoTipoManifiestoAndEstado/{codigoTipoManifiesto}/{estado}",
          "GET /api/tbtipodestinaciones/findAllByCodigoTipoManifiestoAndEstadoNgSelect/{codigoTipoManifiesto}/{estado}",
          "GET /api/tbtipodestinaciones/findAllByEstado/{estado}",
          "GET /api/tbtipodestinaciones/findByCodigo/{codigo}",
          "GET /api/tbtipodestinaciones/{id}",
          "POST /api/tbtipodestinaciones",
          "POST /api/tbtipodestinaciones/findAllByIdList",
          "PUT /api/tbtipodestinaciones"
        ]
      },
      {
        "name": "tb-tipo-destinacion-tipo-manifiesto-controller",
        "endpoints": [
          "DELETE /api/tbtipodestinaciontipomanifiestos",
          "GET /api/tbtipodestinaciontipomanifiestos/findAllByIdTipoDestinacion/{idTipoDestinacion}",
          "GET /api/tbtipodestinaciontipomanifiestos/{tbTipoDestinacion}/{tbTipoManifiesto}",
          "POST /api/tbtipodestinaciontipomanifiestos",
          "POST /api/tbtipodestinaciontipomanifiestos/insertAndDeleteAllCustom",
          "PUT /api/tbtipodestinaciontipomanifiestos"
        ]
      },
      {
        "name": "tb-tipo-documento-controller",
        "endpoints": [
          "DELETE /api/tbtipodocumentos",
          "GET /api/tbtipodocumentos/existById/{id}",
          "GET /api/tbtipodocumentos/findAll",
          "GET /api/tbtipodocumentos/findAllByEstado/{estado}",
          "GET /api/tbtipodocumentos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipodocumentos/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipodocumentos/{id}",
          "POST /api/tbtipodocumentos",
          "POST /api/tbtipodocumentos/findAllByCodigoList",
          "POST /api/tbtipodocumentos/findAllByIdList",
          "PUT /api/tbtipodocumentos"
        ]
      },
      {
        "name": "tb-tipo-documento-oficial-controller",
        "endpoints": [
          "DELETE /api/tbtipodocumentooficiales",
          "GET /api/tbtipodocumentooficiales/existById/{id}",
          "GET /api/tbtipodocumentooficiales/findAll",
          "GET /api/tbtipodocumentooficiales/findAllByCodigoNgSelect/{codigo}",
          "GET /api/tbtipodocumentooficiales/findAllByCodigoSistema/{codSistema}",
          "GET /api/tbtipodocumentooficiales/findAllByEstado/{estado}",
          "GET /api/tbtipodocumentooficiales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipodocumentooficiales/findAllByIdSistemaNgSelect/{idSistema}",
          "GET /api/tbtipodocumentooficiales/findByCodigo/{codigo}",
          "GET /api/tbtipodocumentooficiales/findByCodigoAndCodigoSistema/{codigo}/{codigoSistema}",
          "GET /api/tbtipodocumentooficiales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipodocumentooficiales/{id}",
          "POST /api/tbtipodocumentooficiales",
          "POST /api/tbtipodocumentooficiales/findAllByCodigoList",
          "POST /api/tbtipodocumentooficiales/findAllByCodigoListAndIdSistema/{idSistema}",
          "POST /api/tbtipodocumentooficiales/findAllByIdList",
          "PUT /api/tbtipodocumentooficiales"
        ]
      },
      {
        "name": "tb-tipo-elemento-controller",
        "endpoints": [
          "DELETE /api/tbtipoelementos",
          "GET /api/tbtipoelementos/findAll",
          "GET /api/tbtipoelementos/findAllByEstado/{estado}",
          "GET /api/tbtipoelementos/findAllByIdTipoArchivo/{idTipoArchivo}",
          "GET /api/tbtipoelementos/{id}",
          "POST /api/tbtipoelementos",
          "POST /api/tbtipoelementos/findAllByCodigoList",
          "POST /api/tbtipoelementos/findAllByIdList",
          "PUT /api/tbtipoelementos"
        ]
      },
      {
        "name": "tb-tipo-embarque-controller",
        "endpoints": [
          "DELETE /api/tbtipoembarques",
          "GET /api/tbtipoembarques/existById/{id}",
          "GET /api/tbtipoembarques/findAll",
          "GET /api/tbtipoembarques/findAllByEstado/{estado}",
          "GET /api/tbtipoembarques/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoembarques/{id}",
          "POST /api/tbtipoembarques",
          "POST /api/tbtipoembarques/findAllByCodigoList",
          "POST /api/tbtipoembarques/findAllByIdList",
          "PUT /api/tbtipoembarques"
        ]
      },
      {
        "name": "tb-tipo-emision-comprobante-controller",
        "endpoints": [
          "DELETE /api/tbtipoemisioncomprobantes",
          "GET /api/tbtipoemisioncomprobantes/findAll",
          "GET /api/tbtipoemisioncomprobantes/findAllByEstado/{estado}",
          "GET /api/tbtipoemisioncomprobantes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoemisioncomprobantes/findByCodigo/{codigo}",
          "GET /api/tbtipoemisioncomprobantes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipoemisioncomprobantes/{id}",
          "POST /api/tbtipoemisioncomprobantes",
          "POST /api/tbtipoemisioncomprobantes/findAllByIdList",
          "PUT /api/tbtipoemisioncomprobantes"
        ]
      },
      {
        "name": "tb-tipo-envio-controller",
        "endpoints": [
          "DELETE /api/tbtipoenvios",
          "GET /api/tbtipoenvios/existById/{id}",
          "GET /api/tbtipoenvios/findAll",
          "GET /api/tbtipoenvios/findAllByEstado/{estado}",
          "GET /api/tbtipoenvios/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoenvios/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipoenvios/{id}",
          "POST /api/tbtipoenvios",
          "POST /api/tbtipoenvios/findAllByIdList",
          "PUT /api/tbtipoenvios"
        ]
      },
      {
        "name": "tb-tipo-equipamiento-controller",
        "endpoints": [
          "DELETE /api/tbtipoequipamientos",
          "GET /api/tbtipoequipamientos/findAll",
          "GET /api/tbtipoequipamientos/findAllByEstado/{estado}",
          "GET /api/tbtipoequipamientos/findById/{idTipoEquipamiento}",
          "GET /api/tbtipoequipamientos/{id}",
          "POST /api/tbtipoequipamientos",
          "POST /api/tbtipoequipamientos/findAllByCodigoList",
          "POST /api/tbtipoequipamientos/findAllByIdList",
          "PUT /api/tbtipoequipamientos"
        ]
      },
      {
        "name": "tb-tipo-estado-autoliquidacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadoautoliquidaciones",
          "GET /api/tbtipoestadoautoliquidaciones/findAllByEstado/{estado}",
          "GET /api/tbtipoestadoautoliquidaciones/findByCodigo/{codigo}",
          "GET /api/tbtipoestadoautoliquidaciones/{id}",
          "POST /api/tbtipoestadoautoliquidaciones",
          "POST /api/tbtipoestadoautoliquidaciones/findAllByIdList",
          "PUT /api/tbtipoestadoautoliquidaciones"
        ]
      },
      {
        "name": "tb-tipo-estado-cancelacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadocancelaciones",
          "GET /api/tbtipoestadocancelaciones/existById/{id}",
          "GET /api/tbtipoestadocancelaciones/findAll",
          "GET /api/tbtipoestadocancelaciones/findAllByEstado/{estado}",
          "GET /api/tbtipoestadocancelaciones/findByCodigo/{codigo}",
          "GET /api/tbtipoestadocancelaciones/findIdByCodigo/{codigo}",
          "GET /api/tbtipoestadocancelaciones/{id}",
          "POST /api/tbtipoestadocancelaciones",
          "POST /api/tbtipoestadocancelaciones/findAllByCodigoList",
          "POST /api/tbtipoestadocancelaciones/findAllByIdList",
          "PUT /api/tbtipoestadocancelaciones"
        ]
      },
      {
        "name": "tb-tipo-estado-concepto-provision-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadoconceptoprovisiones",
          "GET /api/tbtipoestadoconceptoprovisiones/findAll",
          "GET /api/tbtipoestadoconceptoprovisiones/findAllByCodigoSistema/{codigo}",
          "GET /api/tbtipoestadoconceptoprovisiones/findAllByEstado/{estado}",
          "GET /api/tbtipoestadoconceptoprovisiones/findAllByIdSistema/{idSistema}",
          "GET /api/tbtipoestadoconceptoprovisiones/findByCodigoAndIdSistema/{codigo}/{idSistema}",
          "GET /api/tbtipoestadoconceptoprovisiones/{id}",
          "POST /api/tbtipoestadoconceptoprovisiones",
          "POST /api/tbtipoestadoconceptoprovisiones/findAllByCodigoList",
          "POST /api/tbtipoestadoconceptoprovisiones/findAllByIdList",
          "PUT /api/tbtipoestadoconceptoprovisiones"
        ]
      },
      {
        "name": "tb-tipo-estado-emision-electronica-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadoemisionelectronicas",
          "GET /api/tbtipoestadoemisionelectronicas/findAll",
          "GET /api/tbtipoestadoemisionelectronicas/findAllByCodSistema/{codigo}",
          "GET /api/tbtipoestadoemisionelectronicas/findAllByEstado/{estado}",
          "GET /api/tbtipoestadoemisionelectronicas/findByCodigo/{codigo}",
          "GET /api/tbtipoestadoemisionelectronicas/findByCodigoAndIdSistema/{codigo}/{idSistema}",
          "GET /api/tbtipoestadoemisionelectronicas/findByCodigoSistemaAndCodigo/{codigoSistema}/{codigo}",
          "GET /api/tbtipoestadoemisionelectronicas/findCount",
          "GET /api/tbtipoestadoemisionelectronicas/{id}",
          "POST /api/tbtipoestadoemisionelectronicas",
          "POST /api/tbtipoestadoemisionelectronicas/findAllByIdList",
          "PUT /api/tbtipoestadoemisionelectronicas"
        ]
      },
      {
        "name": "tb-tipo-estado-guia-remision-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadoguiaremisiones",
          "GET /api/tbtipoestadoguiaremisiones/existById/{id}",
          "GET /api/tbtipoestadoguiaremisiones/findAll",
          "GET /api/tbtipoestadoguiaremisiones/findAllByEstado/{estado}",
          "GET /api/tbtipoestadoguiaremisiones/findIdByCodigo/{codigo}",
          "GET /api/tbtipoestadoguiaremisiones/{id}",
          "POST /api/tbtipoestadoguiaremisiones",
          "POST /api/tbtipoestadoguiaremisiones/findAllByCodigoList",
          "POST /api/tbtipoestadoguiaremisiones/findAllByIdList",
          "PUT /api/tbtipoestadoguiaremisiones"
        ]
      },
      {
        "name": "tb-tipo-estado-propuesta-sire-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadopropuestasire",
          "GET /api/tbtipoestadopropuestasire/findAll",
          "GET /api/tbtipoestadopropuestasire/findAllByEstado/{estado}",
          "GET /api/tbtipoestadopropuestasire/findByCodigo/{codigo}",
          "GET /api/tbtipoestadopropuestasire/{id}",
          "POST /api/tbtipoestadopropuestasire",
          "POST /api/tbtipoestadopropuestasire/findAllByCodigoList",
          "POST /api/tbtipoestadopropuestasire/findAllByIdList",
          "PUT /api/tbtipoestadopropuestasire"
        ]
      },
      {
        "name": "tb-tipo-estado-transaccion-aduanera-controller",
        "endpoints": [
          "DELETE /api/tbtipoestadotransaccionaduaneras",
          "GET /api/tbtipoestadotransaccionaduaneras/findAll",
          "GET /api/tbtipoestadotransaccionaduaneras/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoestadotransaccionaduaneras/findByCodigo/{codigo}",
          "GET /api/tbtipoestadotransaccionaduaneras/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipoestadotransaccionaduaneras/findCount",
          "GET /api/tbtipoestadotransaccionaduaneras/{id}",
          "POST /api/tbtipoestadotransaccionaduaneras",
          "POST /api/tbtipoestadotransaccionaduaneras/findAllByIdList",
          "PUT /api/tbtipoestadotransaccionaduaneras"
        ]
      },
      {
        "name": "tb-tipo-financiamiento-controller",
        "endpoints": [
          "DELETE /api/tbtipofinanciamientos",
          "GET /api/tbtipofinanciamientos/findAll",
          "GET /api/tbtipofinanciamientos/findAllByEstado/{estado}",
          "GET /api/tbtipofinanciamientos/findByCodigo/{codigo}",
          "GET /api/tbtipofinanciamientos/{id}",
          "POST /api/tbtipofinanciamientos",
          "POST /api/tbtipofinanciamientos/findAllByIdList",
          "PUT /api/tbtipofinanciamientos"
        ]
      },
      {
        "name": "tb-tipo-formato-control-notificacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoformatocontrolnotificaciones",
          "GET /api/tbtipoformatocontrolnotificaciones/findAllByIdTipoFormato/{idTipoFormato}",
          "GET /api/tbtipoformatocontrolnotificaciones/findAllCustom",
          "GET /api/tbtipoformatocontrolnotificaciones/findAllIdTipoFormatoByIdControlNotificacion/{idControlNotificacion}",
          "GET /api/tbtipoformatocontrolnotificaciones/{tbTipoFormato}/{tbControlNotificacion}",
          "POST /api/tbtipoformatocontrolnotificaciones",
          "PUT /api/tbtipoformatocontrolnotificaciones"
        ]
      },
      {
        "name": "tb-tipo-formato-controller",
        "endpoints": [
          "DELETE /api/tbtipoformatos",
          "GET /api/tbtipoformatos/findAll",
          "GET /api/tbtipoformatos/{id}",
          "POST /api/tbtipoformatos",
          "POST /api/tbtipoformatos/findAllByCodigoList",
          "POST /api/tbtipoformatos/findAllByIdList",
          "PUT /api/tbtipoformatos"
        ]
      },
      {
        "name": "tb-tipo-garantia-controller",
        "endpoints": [
          "DELETE /api/tbtipogarantias",
          "GET /api/tbtipogarantias/findAll",
          "GET /api/tbtipogarantias/findAllByEstado/{estado}",
          "GET /api/tbtipogarantias/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipogarantias/findByCodigo/{codigo}",
          "GET /api/tbtipogarantias/{id}",
          "POST /api/tbtipogarantias",
          "POST /api/tbtipogarantias/findAllByCodigoList",
          "POST /api/tbtipogarantias/findAllByIdList",
          "PUT /api/tbtipogarantias"
        ]
      },
      {
        "name": "tb-tipo-gradualidad-controller",
        "endpoints": [
          "DELETE /api/tbtipogradualidades",
          "GET /api/tbtipogradualidades/findAllByEstado/{estado}",
          "GET /api/tbtipogradualidades/{id}",
          "POST /api/tbtipogradualidades",
          "POST /api/tbtipogradualidades/findAllByIdList",
          "PUT /api/tbtipogradualidades"
        ]
      },
      {
        "name": "tb-tipo-gradualidad-porcentaje-controller",
        "endpoints": [
          "DELETE /api/tbtipogradualidadporcentajes",
          "GET /api/tbtipogradualidadporcentajes/findAllByPorcentajeGradualidadEstado/{estado}",
          "GET /api/tbtipogradualidadporcentajes/findAllByTbTipoGradualidadEstado/{estado}",
          "GET /api/tbtipogradualidadporcentajes/{tbTipoGradualidad}/{tbPorcentajeGradualidad}",
          "POST /api/tbtipogradualidadporcentajes",
          "PUT /api/tbtipogradualidadporcentajes"
        ]
      },
      {
        "name": "tb-tipo-grafico-controller",
        "endpoints": [
          "DELETE /api/tbtipograficos",
          "GET /api/tbtipograficos/findAll",
          "GET /api/tbtipograficos/findAllByEstado/{estado}",
          "GET /api/tbtipograficos/{id}",
          "POST /api/tbtipograficos",
          "POST /api/tbtipograficos/findAllByIdList",
          "POST /api/tbtipograficos/insert",
          "POST /api/tbtipograficos/update",
          "PUT /api/tbtipograficos"
        ]
      },
      {
        "name": "tb-tipo-guia-remision-controller",
        "endpoints": [
          "DELETE /api/tbtipoguiaremisiones",
          "GET /api/tbtipoguiaremisiones/existById/{id}",
          "GET /api/tbtipoguiaremisiones/findAll",
          "GET /api/tbtipoguiaremisiones/findByCodigo/{codigo}",
          "GET /api/tbtipoguiaremisiones/{id}",
          "POST /api/tbtipoguiaremisiones",
          "POST /api/tbtipoguiaremisiones/findAllByIdList",
          "PUT /api/tbtipoguiaremisiones"
        ]
      },
      {
        "name": "tb-tipo-impuesto-controller",
        "endpoints": [
          "DELETE /api/tbtipoimpuestos",
          "GET /api/tbtipoimpuestos/existById/{id}",
          "GET /api/tbtipoimpuestos/findAll",
          "GET /api/tbtipoimpuestos/findAllByEstado/{estado}",
          "GET /api/tbtipoimpuestos/findAllByPredeterminado",
          "GET /api/tbtipoimpuestos/findByCodigo/{codigo}",
          "GET /api/tbtipoimpuestos/findByPredeterminadoDefault",
          "GET /api/tbtipoimpuestos/{id}",
          "POST /api/tbtipoimpuestos",
          "POST /api/tbtipoimpuestos/findAllByIdList",
          "PUT /api/tbtipoimpuestos"
        ]
      },
      {
        "name": "tb-tipo-incentivo-controller",
        "endpoints": [
          "DELETE /api/tbtipoincentivos",
          "GET /api/tbtipoincentivos/findAllByEstado/{estado}",
          "GET /api/tbtipoincentivos/{id}",
          "POST /api/tbtipoincentivos",
          "PUT /api/tbtipoincentivos"
        ]
      },
      {
        "name": "tb-tipo-incentivo-porcentaje-controller",
        "endpoints": [
          "DELETE /api/tbtipoincentivoporcentajes",
          "GET /api/tbtipoincentivoporcentajes/findAllByPorcentajeIncentivoEstado/{estado}",
          "GET /api/tbtipoincentivoporcentajes/findAllByTipoIncentivoEstado/{estado}",
          "GET /api/tbtipoincentivoporcentajes/{tbTipoIncentivo}/{tbPorcentajeIncentivo}",
          "POST /api/tbtipoincentivoporcentajes",
          "PUT /api/tbtipoincentivoporcentajes"
        ]
      },
      {
        "name": "tb-tipo-intermediario-controller",
        "endpoints": [
          "DELETE /api/tbtipointermediarios",
          "GET /api/tbtipointermediarios/findAll",
          "GET /api/tbtipointermediarios/findAllByEstado/{estado}",
          "GET /api/tbtipointermediarios/{id}",
          "POST /api/tbtipointermediarios",
          "POST /api/tbtipointermediarios/findAllByCodigoList",
          "POST /api/tbtipointermediarios/findAllByIdList",
          "PUT /api/tbtipointermediarios"
        ]
      },
      {
        "name": "tb-tipo-libro-sire-controller",
        "endpoints": [
          "DELETE /api/tbtipolibrosires",
          "GET /api/tbtipolibrosires/findAll",
          "GET /api/tbtipolibrosires/findAllByEstado/{estado}",
          "GET /api/tbtipolibrosires/findAllByIdSistema/{idSistema}",
          "GET /api/tbtipolibrosires/{id}",
          "POST /api/tbtipolibrosires",
          "POST /api/tbtipolibrosires/findAllTbTipoLibroSireBySearch",
          "PUT /api/tbtipolibrosires"
        ]
      },
      {
        "name": "tb-tipo-libro-sire-tipo-compra-controller",
        "endpoints": [
          "DELETE /api/tbtipolibrosiretipocompras",
          "GET /api/tbtipolibrosiretipocompras/findAllIdByIdTipoLibroSire/{idTipoLibroSire}",
          "GET /api/tbtipolibrosiretipocompras/{tbTipoLibroSire}/{scoTipoCompra}",
          "POST /api/tbtipolibrosiretipocompras",
          "POST /api/tbtipolibrosiretipocompras/insertAndDeleteAllCustom",
          "PUT /api/tbtipolibrosiretipocompras"
        ]
      },
      {
        "name": "tb-tipo-llenado-contenedor-controller",
        "endpoints": [
          "DELETE /api/tbtipollenadocontenedores",
          "GET /api/tbtipollenadocontenedores/findAll",
          "GET /api/tbtipollenadocontenedores/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipollenadocontenedores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipollenadocontenedores/{id}",
          "POST /api/tbtipollenadocontenedores",
          "POST /api/tbtipollenadocontenedores/findAllByCodigoList",
          "POST /api/tbtipollenadocontenedores/findAllByIdList",
          "PUT /api/tbtipollenadocontenedores"
        ]
      },
      {
        "name": "tb-tipo-manifiesto-controller",
        "endpoints": [
          "DELETE /api/tbtipomanifiestos",
          "GET /api/tbtipomanifiestos/existById/{id}",
          "GET /api/tbtipomanifiestos/findAll",
          "GET /api/tbtipomanifiestos/findAllByEstado/{estado}",
          "GET /api/tbtipomanifiestos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipomanifiestos/findByCodigo/{codigo}",
          "GET /api/tbtipomanifiestos/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipomanifiestos/{id}",
          "POST /api/tbtipomanifiestos",
          "POST /api/tbtipomanifiestos/findAllByIdList",
          "PUT /api/tbtipomanifiestos"
        ]
      },
      {
        "name": "tb-tipo-mercaderia-controller",
        "endpoints": [
          "DELETE /api/tbtipomercaderias",
          "GET /api/tbtipomercaderias/existById/{id}",
          "GET /api/tbtipomercaderias/findAll",
          "GET /api/tbtipomercaderias/findAllByEstado/{estado}",
          "GET /api/tbtipomercaderias/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipomercaderias/findByCodigo/{codigo}",
          "GET /api/tbtipomercaderias/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipomercaderias/{id}",
          "POST /api/tbtipomercaderias",
          "POST /api/tbtipomercaderias/findAllByCodigoList",
          "POST /api/tbtipomercaderias/findAllByIdList",
          "PUT /api/tbtipomercaderias"
        ]
      },
      {
        "name": "tb-tipo-movimiento-contenedor-controller",
        "endpoints": [
          "DELETE /api/tbtipomovimientocontenedores",
          "GET /api/tbtipomovimientocontenedores/existById/{id}",
          "GET /api/tbtipomovimientocontenedores/findAll",
          "GET /api/tbtipomovimientocontenedores/findAllByEstado/{estado}",
          "GET /api/tbtipomovimientocontenedores/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipomovimientocontenedores/findAllByIdViaTransporte/{idViaTransporte}",
          "GET /api/tbtipomovimientocontenedores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipomovimientocontenedores/{id}",
          "POST /api/tbtipomovimientocontenedores",
          "POST /api/tbtipomovimientocontenedores/findAllByCodigoList",
          "POST /api/tbtipomovimientocontenedores/findAllByIdList",
          "PUT /api/tbtipomovimientocontenedores"
        ]
      },
      {
        "name": "tb-tipo-observacion-controller",
        "endpoints": [
          "DELETE /api/tbtipoobservaciones",
          "GET /api/tbtipoobservaciones/existById/{id}",
          "GET /api/tbtipoobservaciones/findAll",
          "GET /api/tbtipoobservaciones/findAllByCodigoSistemaAndEstado/{codigo}/{estado}",
          "GET /api/tbtipoobservaciones/findAllByIdSistemaAndEstado/{idSistema}/{estado}",
          "GET /api/tbtipoobservaciones/findByCodigo/{codigo}",
          "GET /api/tbtipoobservaciones/{id}",
          "POST /api/tbtipoobservaciones",
          "POST /api/tbtipoobservaciones/findAllByIdList",
          "POST /api/tbtipoobservaciones/findAllByIdSistemaListAndEstado",
          "PUT /api/tbtipoobservaciones"
        ]
      },
      {
        "name": "tb-tipo-operacion-cola-controller",
        "endpoints": [
          "DELETE /api/tbtipooperacioncolas",
          "GET /api/tbtipooperacioncolas/findAll",
          "GET /api/tbtipooperacioncolas/findByCodigo/{codigo}",
          "GET /api/tbtipooperacioncolas/{id}",
          "POST /api/tbtipooperacioncolas",
          "POST /api/tbtipooperacioncolas/findAllByCodigoList",
          "POST /api/tbtipooperacioncolas/findAllByIdList",
          "PUT /api/tbtipooperacioncolas"
        ]
      },
      {
        "name": "tb-tipo-operacion-financiera-controller",
        "endpoints": [
          "DELETE /api/tbtipooperacionfinancieras",
          "GET /api/tbtipooperacionfinancieras/findAll",
          "GET /api/tbtipooperacionfinancieras/findAllByEstado/{estado}",
          "GET /api/tbtipooperacionfinancieras/findByCodigo/{codigo}",
          "GET /api/tbtipooperacionfinancieras/{id}",
          "POST /api/tbtipooperacionfinancieras",
          "POST /api/tbtipooperacionfinancieras/findAllByIdList",
          "PUT /api/tbtipooperacionfinancieras"
        ]
      },
      {
        "name": "tb-tipo-operacion-reporte-controller",
        "endpoints": [
          "DELETE /api/tbtipooperacionreportes",
          "GET /api/tbtipooperacionreportes/findAllByEstado/{estado}",
          "GET /api/tbtipooperacionreportes/{id}",
          "POST /api/tbtipooperacionreportes",
          "PUT /api/tbtipooperacionreportes"
        ]
      },
      {
        "name": "tb-tipo-operacion-usual-controller",
        "endpoints": [
          "DELETE /api/tbtipooperacionusuales",
          "GET /api/tbtipooperacionusuales/existById/{id}",
          "GET /api/tbtipooperacionusuales/findAll",
          "GET /api/tbtipooperacionusuales/findAllByEstado/{estado}",
          "GET /api/tbtipooperacionusuales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipooperacionusuales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipooperacionusuales/{id}",
          "POST /api/tbtipooperacionusuales",
          "PUT /api/tbtipooperacionusuales"
        ]
      },
      {
        "name": "tb-tipo-operador-autoliquidacion-controller",
        "endpoints": [
          "DELETE /api/tbtipooperadorautoliquidaciones",
          "GET /api/tbtipooperadorautoliquidaciones/findAllByEstado/{estado}",
          "GET /api/tbtipooperadorautoliquidaciones/{id}",
          "POST /api/tbtipooperadorautoliquidaciones",
          "PUT /api/tbtipooperadorautoliquidaciones"
        ]
      },
      {
        "name": "tb-tipo-operador-controller",
        "endpoints": [
          "DELETE /api/tbtipooperadores",
          "GET /api/tbtipooperadores/existById/{id}",
          "GET /api/tbtipooperadores/findAll",
          "GET /api/tbtipooperadores/findAllByEstado/{estado}",
          "GET /api/tbtipooperadores/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipooperadores/findByCodigo/{codigo}",
          "GET /api/tbtipooperadores/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipooperadores/{id}",
          "POST /api/tbtipooperadores",
          "POST /api/tbtipooperadores/findAllByCodigoList",
          "POST /api/tbtipooperadores/findAllByIdList",
          "PUT /api/tbtipooperadores"
        ]
      },
      {
        "name": "tb-tipo-pago-controller",
        "endpoints": [
          "DELETE /api/tbtipopagos",
          "GET /api/tbtipopagos/existById/{id}",
          "GET /api/tbtipopagos/findAll",
          "GET /api/tbtipopagos/findAllByEstado/{estado}",
          "GET /api/tbtipopagos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipopagos/findByCodigo/{codigo}",
          "GET /api/tbtipopagos/{id}",
          "POST /api/tbtipopagos",
          "POST /api/tbtipopagos/findAllByIdList",
          "PUT /api/tbtipopagos"
        ]
      },
      {
        "name": "tb-tipo-parametro-controller",
        "endpoints": [
          "DELETE /api/tbtipoparametros",
          "GET /api/tbtipoparametros/existById/{id}",
          "GET /api/tbtipoparametros/findAll",
          "GET /api/tbtipoparametros/findAllByEstado/{estado}",
          "GET /api/tbtipoparametros/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoparametros/{id}",
          "POST /api/tbtipoparametros",
          "POST /api/tbtipoparametros/findAllByIdList",
          "PUT /api/tbtipoparametros"
        ]
      },
      {
        "name": "tb-tipo-plazo-controller",
        "endpoints": [
          "DELETE /api/tbtipoplazos",
          "GET /api/tbtipoplazos/findAll",
          "GET /api/tbtipoplazos/findAllByEstado/{estado}",
          "GET /api/tbtipoplazos/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoplazos/findByCodigo/{codigo}",
          "GET /api/tbtipoplazos/{id}",
          "POST /api/tbtipoplazos",
          "POST /api/tbtipoplazos/findAllByCodigoList",
          "POST /api/tbtipoplazos/findAllByIdList",
          "PUT /api/tbtipoplazos"
        ]
      },
      {
        "name": "tb-tipo-provision-controller",
        "endpoints": [
          "DELETE /api/tbtipoprovisiones",
          "GET /api/tbtipoprovisiones/findAll",
          "GET /api/tbtipoprovisiones/findByCodigo/{codigo}",
          "GET /api/tbtipoprovisiones/{id}",
          "POST /api/tbtipoprovisiones",
          "POST /api/tbtipoprovisiones/findAllByCodigoList",
          "POST /api/tbtipoprovisiones/findAllByIdList",
          "PUT /api/tbtipoprovisiones"
        ]
      },
      {
        "name": "tb-tipo-regimen-aduanero-controller",
        "endpoints": [
          "DELETE /api/tbtiporegimenaduaneros",
          "GET /api/tbtiporegimenaduaneros/existById/{id}",
          "GET /api/tbtiporegimenaduaneros/findAll",
          "GET /api/tbtiporegimenaduaneros/findAllByEstado/{estado}",
          "GET /api/tbtiporegimenaduaneros/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtiporegimenaduaneros/{id}",
          "POST /api/tbtiporegimenaduaneros",
          "POST /api/tbtiporegimenaduaneros/findAllByIdList",
          "PUT /api/tbtiporegimenaduaneros"
        ]
      },
      {
        "name": "tb-tipo-renta-controller",
        "endpoints": [
          "DELETE /api/tbtiporentas",
          "GET /api/tbtiporentas/existById/{id}",
          "GET /api/tbtiporentas/findAll",
          "GET /api/tbtiporentas/findAllByEstado/{estado}",
          "GET /api/tbtiporentas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtiporentas/{id}",
          "POST /api/tbtiporentas",
          "POST /api/tbtiporentas/findAllByIdList",
          "PUT /api/tbtiporentas"
        ]
      },
      {
        "name": "tb-tipo-servicio-controller",
        "endpoints": [
          "DELETE /api/tbtiposervicios",
          "GET /api/tbtiposervicios/existById/{id}",
          "GET /api/tbtiposervicios/findAll",
          "GET /api/tbtiposervicios/findAllByEstado/{estado}",
          "GET /api/tbtiposervicios/findAllCustomByIdSistema/{idSistema}",
          "GET /api/tbtiposervicios/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtiposervicios/{id}",
          "POST /api/tbtiposervicios",
          "POST /api/tbtiposervicios/findAllByIdList",
          "PUT /api/tbtiposervicios"
        ]
      },
      {
        "name": "tb-tipo-servicio-tipo-operador-controller",
        "endpoints": [
          "DELETE /api/tbtiposerviciotipooperadores",
          "GET /api/tbtiposerviciotipooperadores/findAllByIdTipoOperador/{idTipoOperador}",
          "GET /api/tbtiposerviciotipooperadores/findAllByIdTipoServicio/{idTipoServicio}",
          "GET /api/tbtiposerviciotipooperadores/{tbTipoServicio}/{tbTipoOperador}",
          "POST /api/tbtiposerviciotipooperadores",
          "POST /api/tbtiposerviciotipooperadores/insertAndDeleteAllCustom",
          "PUT /api/tbtiposerviciotipooperadores"
        ]
      },
      {
        "name": "tb-tipo-terminal-portuario-controller",
        "endpoints": [
          "DELETE /api/tbtipoterminalportuarios",
          "GET /api/tbtipoterminalportuarios/existById/{id}",
          "GET /api/tbtipoterminalportuarios/findAll",
          "GET /api/tbtipoterminalportuarios/findAllByEstado/{estado}",
          "GET /api/tbtipoterminalportuarios/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipoterminalportuarios/{id}",
          "POST /api/tbtipoterminalportuarios",
          "POST /api/tbtipoterminalportuarios/findAllByCodigoList",
          "POST /api/tbtipoterminalportuarios/findAllByIdList",
          "PUT /api/tbtipoterminalportuarios"
        ]
      },
      {
        "name": "tb-tipo-transaccion-aduanera-controller",
        "endpoints": [
          "DELETE /api/tbtipotransaccionaduaneras",
          "GET /api/tbtipotransaccionaduaneras/existById/{id}",
          "GET /api/tbtipotransaccionaduaneras/findAll",
          "GET /api/tbtipotransaccionaduaneras/findAllByCodGrupoTipoTransaccionAndCodViaTransporte/{codigoGrupoTipoTransaccionAduanera}/{codigoViaTransporte}",
          "GET /api/tbtipotransaccionaduaneras/findAllByCodigoGrupoTipoTransaccionAduanera/{codigoGrupoTipoTransaccionAduanera}",
          "GET /api/tbtipotransaccionaduaneras/findAllByCodigoSistema/{codigoSistema}",
          "GET /api/tbtipotransaccionaduaneras/findAllByCodigoViaTransporteCustom/{codigoViaTransporte}",
          "GET /api/tbtipotransaccionaduaneras/findAllByEstado/{estado}",
          "GET /api/tbtipotransaccionaduaneras/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipotransaccionaduaneras/findAllByIdRegimenAduaneroAndIdSistemaAndEstado/{idRegimenAduanero}/{idSistema}/{estado}",
          "GET /api/tbtipotransaccionaduaneras/findAllByIdViaTransporte/{idViaTransporte}",
          "GET /api/tbtipotransaccionaduaneras/findByCodigo/{codigo}",
          "GET /api/tbtipotransaccionaduaneras/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipotransaccionaduaneras/findByCodigoConfiguracionAsignacionAndIdViaTransporteCustom/{codigoConfiguracionAsignacion}/{idViaTransporte}",
          "GET /api/tbtipotransaccionaduaneras/{id}",
          "POST /api/tbtipotransaccionaduaneras",
          "POST /api/tbtipotransaccionaduaneras/findAllByCodigoList",
          "POST /api/tbtipotransaccionaduaneras/findAllByIdList",
          "PUT /api/tbtipotransaccionaduaneras"
        ]
      },
      {
        "name": "tb-tipo-transporte-controller",
        "endpoints": [
          "DELETE /api/tbtipotransportes",
          "GET /api/tbtipotransportes/existById/{id}",
          "GET /api/tbtipotransportes/findAll",
          "GET /api/tbtipotransportes/findAllByEstado/{estado}",
          "GET /api/tbtipotransportes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbtipotransportes/{id}",
          "POST /api/tbtipotransportes",
          "POST /api/tbtipotransportes/findAllByCodigoList",
          "POST /api/tbtipotransportes/findAllByIdList",
          "PUT /api/tbtipotransportes"
        ]
      },
      {
        "name": "tb-tipo-transporte-via-controller",
        "endpoints": [
          "DELETE /api/tbtipotransportevias",
          "GET /api/tbtipotransportevias/existById/{idTipoTransporte}/{idViaTransporte}",
          "GET /api/tbtipotransportevias/findAllByCodigoViaTransporteAndEstado/{codigoViaTransporte}/{estado}",
          "GET /api/tbtipotransportevias/findAllByCodigoViaTransporteAndEstadoNgSelect/{codigoViaTransporte}/{estado}",
          "GET /api/tbtipotransportevias/findAllIdByIdTipoTransporte/{idTipoTransporte}",
          "GET /api/tbtipotransportevias/{tbTipoTransporte}/{tbViaTransporte}",
          "POST /api/tbtipotransportevias",
          "POST /api/tbtipotransportevias/insertAndDeleteAllCustom",
          "PUT /api/tbtipotransportevias"
        ]
      },
      {
        "name": "tb-tipo-valor-referencial-oficial-controller",
        "endpoints": [
          "DELETE /api/tbtipovalorreferencialoficiales",
          "GET /api/tbtipovalorreferencialoficiales/findAll",
          "GET /api/tbtipovalorreferencialoficiales/findAllByEstado/{estado}",
          "GET /api/tbtipovalorreferencialoficiales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbtipovalorreferencialoficiales/findByCodigo/{codigo}",
          "GET /api/tbtipovalorreferencialoficiales/{id}",
          "POST /api/tbtipovalorreferencialoficiales",
          "PUT /api/tbtipovalorreferencialoficiales"
        ]
      },
      {
        "name": "tb-tipo-vehiculo-carreta-controller",
        "endpoints": [
          "DELETE /api/tbtipovehiculocarretas",
          "GET /api/tbtipovehiculocarretas/existById/{id}",
          "GET /api/tbtipovehiculocarretas/findAll",
          "GET /api/tbtipovehiculocarretas/findAllByCtrlVehiculoCarreta/{ctrlVehiculoCarreta}/{estado}",
          "GET /api/tbtipovehiculocarretas/findAllByCtrlVehiculoCarretaNgSelect/{ctrlVehiculoCarreta}/{estado}",
          "GET /api/tbtipovehiculocarretas/findAllByEstado/{estado}",
          "GET /api/tbtipovehiculocarretas/{id}",
          "POST /api/tbtipovehiculocarretas",
          "POST /api/tbtipovehiculocarretas/findAllByCodigoList",
          "POST /api/tbtipovehiculocarretas/findAllByIdList",
          "PUT /api/tbtipovehiculocarretas"
        ]
      },
      {
        "name": "tb-tipo-vinculacion-economica-controller",
        "endpoints": [
          "DELETE /api/tbtipovinculacioneconomicas",
          "GET /api/tbtipovinculacioneconomicas/findAll",
          "GET /api/tbtipovinculacioneconomicas/findAllByEstado/{estado}",
          "GET /api/tbtipovinculacioneconomicas/{id}",
          "POST /api/tbtipovinculacioneconomicas",
          "POST /api/tbtipovinculacioneconomicas/findAllByIdList",
          "PUT /api/tbtipovinculacioneconomicas"
        ]
      },
      {
        "name": "tb-transportista-controller",
        "endpoints": [
          "GET /api/tbtransportistas/findAllByEstado/{estado}"
        ]
      },
      {
        "name": "tb-ubicacion-comercial-controller",
        "endpoints": [
          "DELETE /api/tbubicacioncomerciales",
          "GET /api/tbubicacioncomerciales/existById/{id}",
          "GET /api/tbubicacioncomerciales/findAll",
          "GET /api/tbubicacioncomerciales/findAllByCodigoPaisAndEstadoCustom/{codigoPais}/{estado}",
          "GET /api/tbubicacioncomerciales/findAllByEstado/{estado}",
          "GET /api/tbubicacioncomerciales/findAllByEstadoCustom/{estado}",
          "GET /api/tbubicacioncomerciales/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbubicacioncomerciales/findAllByIdPais/{idPais}",
          "GET /api/tbubicacioncomerciales/findAllByNombreLikeAndEstadoCustom/{nombre}/{estado}",
          "GET /api/tbubicacioncomerciales/findAllByNombreOrCodigoLikeAndEstadoCustom/{parametro}/{estado}",
          "GET /api/tbubicacioncomerciales/findByCodigo/{codigo}",
          "GET /api/tbubicacioncomerciales/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbubicacioncomerciales/findByIdCustom/{id}",
          "GET /api/tbubicacioncomerciales/findByNombreAndCodigo/{nombre}/{codigo}",
          "GET /api/tbubicacioncomerciales/{id}",
          "POST /api/tbubicacioncomerciales",
          "POST /api/tbubicacioncomerciales/findAllByCodigoList",
          "POST /api/tbubicacioncomerciales/findAllByIdList",
          "POST /api/tbubicacioncomerciales/findAllBySearchAndNombreLikeCustom/{nombre}",
          "POST /api/tbubicacioncomerciales/findAllBySearchAndNombreOrCodigoLikeCustom/{parametro}",
          "POST /api/tbubicacioncomerciales/findAllBySearchDate",
          "POST /api/tbubicacioncomerciales/findAllCustomDtoNgSelect",
          "POST /api/tbubicacioncomerciales/findCustomDto",
          "PUT /api/tbubicacioncomerciales"
        ]
      },
      {
        "name": "tb-ubicacion-comercial-via-transporte-controller",
        "endpoints": [
          "DELETE /api/tbubicacioncomercialviatransportes",
          "DELETE /api/tbubicacioncomercialviatransportes/deleteSelect/{idUbicacionComercial}/{idViaTransporte}",
          "GET /api/tbubicacioncomercialviatransportes/findAll",
          "GET /api/tbubicacioncomercialviatransportes/findAllByIdAduana/{idAduana}",
          "GET /api/tbubicacioncomercialviatransportes/findAllByIdUbicacionComercial/{idUbicacionComercial}",
          "GET /api/tbubicacioncomercialviatransportes/findByIdUbicacionComercialAndIdViaTransporte/{idUbicacionComercial}/{idViaTransporte}",
          "GET /api/tbubicacioncomercialviatransportes/{tbUbicacionComercial}/{tbViaTransporte}",
          "POST /api/tbubicacioncomercialviatransportes",
          "POST /api/tbubicacioncomercialviatransportes/insertList",
          "PUT /api/tbubicacioncomercialviatransportes"
        ]
      },
      {
        "name": "tb-ubicacion-geografica-controller",
        "endpoints": [
          "DELETE /api/tbubicaciongeograficas",
          "GET /api/tbubicaciongeograficas/existById/{id}",
          "GET /api/tbubicaciongeograficas/findAll",
          "GET /api/tbubicaciongeograficas/findAllByEstado/{estado}",
          "GET /api/tbubicaciongeograficas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbubicaciongeograficas/findAllByNivel/{nivel}",
          "GET /api/tbubicaciongeograficas/findAllByNivelAndEstadoNgSelect/{nivel}/{estado}",
          "GET /api/tbubicaciongeograficas/findByCodigo/{codigo}",
          "GET /api/tbubicaciongeograficas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbubicaciongeograficas/findByIdCustom/{idUbicacionGeografica}",
          "GET /api/tbubicaciongeograficas/findByNivelAndId/{nivel}/{idUbicacionGeografica}",
          "GET /api/tbubicaciongeograficas/findByNombrePadreAndNombreHijo/{nombrePadre}/{nombreHijo}",
          "GET /api/tbubicaciongeograficas/{id}",
          "POST /api/tbubicaciongeograficas",
          "POST /api/tbubicaciongeograficas/findAllByCodigoList",
          "POST /api/tbubicaciongeograficas/findAllByIdList",
          "POST /api/tbubicaciongeograficas/findAllByNivelAndIdList/{nivel}",
          "POST /api/tbubicaciongeograficas/findAllByNivelAndIdUbigeoPadre/{nivel}",
          "POST /api/tbubicaciongeograficas/findAllByNombrePadreAndNombreHijo",
          "POST /api/tbubicaciongeograficas/findAllBySearchAndNombreOrCodigoLikeCustom/{parametro}",
          "PUT /api/tbubicaciongeograficas"
        ]
      },
      {
        "name": "tb-unidad-medida-controller",
        "endpoints": [
          "DELETE /api/tbunidadmedidas",
          "GET /api/tbunidadmedidas/existById/{id}",
          "GET /api/tbunidadmedidas/findAll",
          "GET /api/tbunidadmedidas/findAllByEstado/{estado}",
          "GET /api/tbunidadmedidas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbunidadmedidas/findByCodigo/{codigo}",
          "GET /api/tbunidadmedidas/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbunidadmedidas/findByCodigoCatalogo65/{codigoCatalogo65}",
          "GET /api/tbunidadmedidas/findIdByCodigo/{codigo}",
          "GET /api/tbunidadmedidas/{id}",
          "POST /api/tbunidadmedidas",
          "POST /api/tbunidadmedidas/findAllByCodigoCatalogo65List",
          "POST /api/tbunidadmedidas/findAllByCodigoList",
          "POST /api/tbunidadmedidas/findAllByIdList",
          "PUT /api/tbunidadmedidas"
        ]
      },
      {
        "name": "tb-unidad-mercancia-controller",
        "endpoints": [
          "DELETE /api/tbunidadmercancias",
          "GET /api/tbunidadmercancias/existById/{id}",
          "GET /api/tbunidadmercancias/findAll",
          "GET /api/tbunidadmercancias/findAllByEstado/{estado}",
          "GET /api/tbunidadmercancias/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbunidadmercancias/findByCodigo/{codigo}",
          "GET /api/tbunidadmercancias/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbunidadmercancias/{id}",
          "POST /api/tbunidadmercancias",
          "POST /api/tbunidadmercancias/findAllByCodigoList",
          "POST /api/tbunidadmercancias/findAllByIdList",
          "PUT /api/tbunidadmercancias"
        ]
      },
      {
        "name": "tb-unidad-temperatura-controller",
        "endpoints": [
          "DELETE /api/tbunidadtemperaturas",
          "GET /api/tbunidadtemperaturas/existById/{id}",
          "GET /api/tbunidadtemperaturas/findAll",
          "GET /api/tbunidadtemperaturas/findAllByEstado/{estado}",
          "GET /api/tbunidadtemperaturas/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbunidadtemperaturas/{id}",
          "POST /api/tbunidadtemperaturas",
          "POST /api/tbunidadtemperaturas/findAllByIdList",
          "PUT /api/tbunidadtemperaturas"
        ]
      },
      {
        "name": "tb-valor-referencial-oficial-controller",
        "endpoints": [
          "DELETE /api/tbvalorreferencialoficiales",
          "GET /api/tbvalorreferencialoficiales/findAll",
          "GET /api/tbvalorreferencialoficiales/findAllByCodigoTipoValorReferencialOficial/{codigoTipoValorReferencialOficial}",
          "GET /api/tbvalorreferencialoficiales/findAllByCodigoTipoValorReferencialOficialAndFecha/{codigoTipoValorReferencialOficial}/{fecha}",
          "GET /api/tbvalorreferencialoficiales/{id}",
          "POST /api/tbvalorreferencialoficiales",
          "PUT /api/tbvalorreferencialoficiales"
        ]
      },
      {
        "name": "tb-version-incoterm-controller",
        "endpoints": [
          "DELETE /api/tbversionincotermes",
          "GET /api/tbversionincotermes/existById/{id}",
          "GET /api/tbversionincotermes/findAll",
          "GET /api/tbversionincotermes/findAllByEstado/{estado}",
          "GET /api/tbversionincotermes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbversionincotermes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbversionincotermes/{id}",
          "POST /api/tbversionincotermes",
          "POST /api/tbversionincotermes/findAllByIdList",
          "PUT /api/tbversionincotermes"
        ]
      },
      {
        "name": "tb-via-transporte-controller",
        "endpoints": [
          "DELETE /api/tbviatransportes",
          "GET /api/tbviatransportes/existById/{id}",
          "GET /api/tbviatransportes/findAll",
          "GET /api/tbviatransportes/findAllByCodigoCatalogoAndEstadoNgSelect/{catalogo}/{estado}",
          "GET /api/tbviatransportes/findAllByEstado/{estado}",
          "GET /api/tbviatransportes/findAllByEstadoNgSelect/{estado}",
          "GET /api/tbviatransportes/findAllByIdUbicacionComercialNgSelect/{idUbicacionComercial}",
          "GET /api/tbviatransportes/findByCatalogoAndCodigo/{catalogo}/{codigo}",
          "GET /api/tbviatransportes/findByCodigo/{codigo}",
          "GET /api/tbviatransportes/findByCodigoAndEstado/{codigo}/{estado}",
          "GET /api/tbviatransportes/findIdByCodigo/{codigo}",
          "GET /api/tbviatransportes/{id}",
          "POST /api/tbviatransportes",
          "POST /api/tbviatransportes/findAllByCodigoList",
          "POST /api/tbviatransportes/findAllByIdList",
          "POST /api/tbviatransportes/findByCatalogoAndCodigoCatalogoList/{catalogo}",
          "PUT /api/tbviatransportes"
        ]
      }
    ]
  }
];
