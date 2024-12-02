// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';

// Crea un nuovo grafo RDF
const store = graph();

// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const ITO = Namespace('http://www.itemsontology.com/item_features/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#');
const OWL = Namespace ('https://www.w3.org/2002/07/owl#');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#');
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#');
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');

// Aggiungi tutte le triple al grafo
store.add(WD('Q2668072'), RDF('type'), CRM('E24'));
store.add(WD('Q2668072'), DCTERMS('spatial'), WD('Q907894'));
store.add(WD('Q907894'),  WDT('P131'),  WD('Q956'));
store.add(WD('Q956'), WDT('P17'),  WD('Q29520'));
store.add(WD('Q29520'), RDF('type'), CRM('E53'));
store.add(WD('Q956'), RDF('type'), CRM('E53'));
store.add(WD('Q2668072'), DC('creator'), ITO('Chinese_Artisans'));
store.add(ITO('Chinese_Artisans'), RDF('type'), WD('Q1294787'));
store.add(WD('Q1294787'), RDF('type'), DCTERMS('Agent'));
store.add(ITO('Chinese_Artisans'), RDFS('label'), literal('Chinese Artisans'));
store.add(WD('Q2668072'), DCTERMS('created'), literal('17th-19th century'));
store.add(WD('Q2668072'), DC('subject'), literal('Qing Dinasty'));
store.add(WD('Q2668072'), DC('subject'), literal('Chinese Arifacts'));
store.add(WD('Q2668072'), DC('subject'), literal('Old Summer Palace'));
store.add(WD('Q2668072'), DC('title'), literal('Old Summer Palace Artifacts'));
store.add(WD('Q2668072'), DC('type'), literal('Porcellaines'));
store.add(WD('Q2668072'), DC('type'), literal('Scroll Paintings'));
store.add(WD('Q2668072'), DC('type'), literal('Tapestries'));
store.add(WD('Q2668072'), DC('type'), literal('Bronzes'));
store.add(WD('Q2668072'), DC('description'), literal ("The artifacts from the Old Summer Palace are a poignant reminder of China's cultural heritage loss and a tragic episode in its history. They were part of the Qing emperors’ private collections, reflecting their tastes, values, and wealth. They were either created by or curated for the Chinese royal family, making them emblematic of the dynasty’s power and prosperity."));
store.add(WD('Q2668072'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(WD('Q2668072'), DCTERMS('isPartOf'), ITO('East_Asia_Collection'));
store.add(ITO('East_Asia_Collection'), RDF('type'), WD('Q27699276'));
store.add(ITO('East_Asia_Collection'), RDFS('label'), literal('East Asia Collection'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(ITO('East_Asia_Collection'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q213322'));
store.add(WD('Q213322'), RDF('type'), CRM('E39'));
store.add(WD('Q213322'), RDF('type'), CRM('E53'));
store.add(WD('Q213322'),  WDT('P131'),  WD('Q84'));
store.add(WD('Q213322'),  WDT('P1566'), literal('6619831', XSD('integer')));
store.add(WD('Q213322'), GEO('lat'), literal('51.4968', XSD('float')));
store.add(WD('Q213322'), GEO('long'), literal('-0.17273', XSD('float')));
store.add(WD('Q213322'), OWL('sameAs'), namedNode('http://sws.geonames.org/6619831/'));
store.add(WD('Q213322'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(WD('Q213322'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q18345888'));
store.add(WD('Q18345888'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(WD('Q18345888'), RDF('type'), CRM('E96'));
store.add(WD('Q2668072'), CRM('P52'), WD('Q213322'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q707482'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q18345888'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('British_and_French_plunder'));
store.add(ITO('British_and_French_Plunder'), RDFS('label'), literal('British and French Plunder'));
store.add(WD('Q2668072'), CRM('P26'), WD('Q84'));
store.add(WD('Q2668072'), CRM('P55'), WD('Q213322'));
store.add(WD('Q213322'),  WDT('P1566'), literal('6619831', XSD('integer')));
store.add(WD('Q213322'), GEO('lat'), literal('51.4968', XSD('float')));
store.add(WD('Q213322'), GEO('long'), literal('-0.17273', XSD('float')));
store.add(WD('Q213322'), OWL('sameAs'), namedNode('http://sws.geonames.org/6619831/'));
store.add(WD('Q2668072'), CRM('P27'), WD('Q907894'));
store.add(WD('Q907894'), RDF('type'), CRM('E53'));
store.add(WD('Q907894'),  WDT('P1566'), literal('6614403', XSD('integer')));
store.add(WD('Q907894'), GEO('lat'), literal('40.00812', XSD('float')));
store.add(WD('Q907894'), GEO('long'), literal('116.30269', XSD('float')));
store.add(WD('Q907894'), OWL('sameAs'), namedNode('http://sws.geonames.org/6614403/'));
store.add(WD('Q84'), RDF('type'), CRM('E53'));
store.add(WD('Q2668072'), CRM('P51'), WD('Q334452'));
store.add(WD('Q334452'), RDF('type'), CRM('E21'));
store.add(WD('Q334452'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P107i_is_current_or_former_member_of'), WD('Q8733'));
store.add(WD('Q8733'), RDF('type'), CRM('E74'));
store.add(WD('Q334452'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), ITO('British_and_French_plunder'));
store.add (ITO('British_and_French_plunder'), RDF('type'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(ITO('British_and_French_plunder'), CRM('P17'), WD('Q418151'));
store.add(ITO('British_and_French_plunder'), CRM('P14'), WD('Q222595'));
store.add(WD('Q222595'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q418151'));
store.add(WD('Q222595'), RDF('type'), CRM('E39'));
store.add(ITO('British_and_French_plunder'), CRM('P14'), WD('Q1076619'));
store.add(WD('Q1076619'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q418151'));
store.add(WD('Q1076619'), RDF('type'), CRM('E39'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), ITO('British_and_French_plunder'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q418151'));
store.add(WD('Q418151'), RDF('type'), CRM('E5'));
store.add(WD('Q418151'), DCTERMS('spatial'), WD('Q29520'));
store.add(WD('Q418151'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DC('date'), literal('1856-10-8/1860-10-24'));
store.add(WD('Q418151'), CRM('P10'), ITO('Western_Colonialism_in_China'));
store.add(ITO('Western_Colonialism_in_China'), RDF('type'), WD('Q7167'));
store.add(WD('Q7167'), RDF('type'), CRM('E2'));
store.add(ITO('Western_Colonialism_in_China'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(ITO('Western_Colonialism_in_China'), RDFS('label'), literal('Western Colonialism in China'));


// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E3'), RDFS('label'), literal('Condition state'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E53'), RDFS('label'), literal('Place'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E96'), RDFS('label'), literal('Purchase'))
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E74'), RDFS('label'), literal('Group'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q1294787'), RDFS('label'), literal('Artisan'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q213322'), RDFS('label'), literal('Victoria and Albert Museum'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q29520'), RDFS('label'), literal('China'));
store.add(WD('Q907894'), RDFS('label'), literal('Old Summer Palace'));
store.add(WD('Q334452'), RDFS('label'), literal('Xianfeng Emperor'));
store.add(WD('Q8733'), RDFS('label'), literal('Qing Dinasty'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(WD('Q418151'), RDFS('label'), literal('Second Opium War'));
store.add(WD('Q222595'), RDFS('label'), literal('British Army'));
store.add(WD('Q1076619'), RDFS('label'), literal('French Army'));
store.add(WD('Q956'), RDFS('label'),  literal('Beijing'));
store.add(WD('Q18345888'), RDFS('label'), literal('Purchase and Sale Agreement '));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));
store.add (DCTERMS('Agent'), RDFS('label'), literal('Agent'));






// Funzione per serializzare e salvare il grafo come file .rdf
function salvaGrafo(percorsoOutput) {
    serialize(null, store, 'https://www.example.org/', 'application/rdf+xml', (err, result) => {
        if (err) {
            console.error('Errore durante la serializzazione:', err);
        } else {
            writeFile(percorsoOutput, result, (err) => {
                if (err) {
                    console.error('Errore durante il salvataggio del file:', err);
                } else {
                    console.log(`File RDF salvato con successo come "${percorsoOutput}"`);
                }
            });
        }
    });
}

// Salva il file RDF
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Desing and Technologies\\Vitali project\\rdf_files_graphs\\3_Asia_Old_Summer_Palace_Artifacts.rdf');