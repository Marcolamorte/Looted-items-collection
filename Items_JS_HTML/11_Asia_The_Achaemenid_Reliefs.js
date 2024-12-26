// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';



// Definisci i namespace
// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const ITO = Namespace('http://www.itemsontology.com/item_features/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#')
const OWL = Namespace ('https://www.w3.org/2002/07/owl#');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#');
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#');
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');


// Crea un nuovo grafo RDF
const store = graph();


// Aggiungi tutte le triple al grafo
store.add(WD('Q104411136'), RDF('type'), CRM('E24'));
store.add(WD('Q104411136'), RDF('type'), WD('Q220659'));
store.add(WD('Q104411136'), DC('subject'), literal('Persepolis (Iran)'));
store.add(WD('Q104411136'), DC('subject'), literal('Aechemenid Art'));
store.add(WD('Q104411136'), DC('subject'), literal('Iranian history'));
store.add(WD('Q104411136'), DC('title'), literal('The Achaemenid Reliefs'));
store.add(WD('Q104411136'), DC('description'), literal ("The Achaemenid Reliefs are a remarkable aspect of ancient Persian art and architecture, primarily associated with the Achaemenid Empire, which was founded by Cyrus the Great and lasted until its conquest by Alexander the Great. These reliefs are some of the most significant artistic legacies of the Achaemenid Empire, in particular for its cultural and historical importance, which offers a glimpse into the political, cultural, and religious life of ancient Persia."));
store.add(WD('Q104411136'), DCTERMS('spatial'), WD('Q129072'));
store.add(WD('Q129072'), RDF('type'), CRM('E53'));
store.add(WD('Q129072'),  WDT('P31'),  WD('Q839954'));
store.add(WD('Q129072'),  WDT('P17'),  WD('Q794'));
store.add(WD('Q794'), RDF('type'), CRM('E53'));
store.add(WD('Q104411136'), DCTERMS('created'), literal('550 BCE - 330 BCE'));
store.add(WD('Q104411136'), DC('type'), literal('Sculpture'));
store.add(WD('Q104411136'), DC('type'), literal('Relief'));
store.add(WD('Q104411136'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q6373'));
store.add(WD('Q104411136'), DC('creator'), ITO('Achemenid_Artists'));
store.add(ITO('Achemenid_Artists'), RDFS('label'), literal('Achemenid Artists'));
store.add(ITO('Achemenid_Artists'), RDF('type'), WD('Q483501'));
store.add(ITO('Achemenid_Artists'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q104411136'),  WDT('P149'),  WD('Q4673399'));
store.add(WD('Q4673399'), RDF('type'), CRM('E29'));
store.add(WD('Q104411136'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(ITO('Good_State_Overall'), CRM('P3'), literal("Some reliefs are fragmented or eroded by time and natural elements."));
store.add(WD('Q104411136'), CRM('P45'), WD('Q23757'))
store.add(WD('Q23757'), RDF('type'), CRM('E57'));
store.add(WD('Q104411136'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(WD('Q104411136'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q18345888'));
store.add(WD('Q18345888'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(WD('Q18345888'), RDF('type'), CRM('E96'));
store.add(WD('Q104411136'), CRM('P52'), WD('Q6373'));
store.add(WD('Q104411136'), CRM('P55'), WD('Q6373'));
store.add(WD('Q6373'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q6373'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q18345888'))
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q6373'), RDF('type'), CRM('E39'));
store.add(WD('Q6373'), RDF('type'), WD('Q33506'));
store.add(WD('Q6373'), WDT('P131'), WD('Q84'));
store.add(WD('Q6373'), WDT('P17'), WD('Q46'));
store.add(WD('Q6373'), WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAs'), namedNode('http://sws.geonames.org/6697862/'));
store.add(WD('Q104411136'), CRM('P27'), WD('Q129072'));
store.add(WD('Q129072'), WDT('P1566'), literal('110836', XSD('integer')));
store.add(WD('Q129072'), GEO('lat'), literal('29.9368', XSD('float')));
store.add(WD('Q129072'), GEO('long'), literal('52.89', XSD('float')));
store.add(WD('Q129072'), OWL('sameAs'), namedNode('http://sws.geonames.org/110836/'));
store.add(WD('Q104411136'), CRM('P26'), WD('Q84'));
store.add(WD('Q104411136'), CRM('P51'), WD('Q389688'));
store.add(WD('Q389688'), RDF('type'), CRM('E39'));
store.add(WD('Q389688'), RDF('type'), CRM('E74'));
store.add(WD('Q389688'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q23009442'));
store.add(WD('Q23009442'), RDF('type'), CRM('E7'));
store.add(WD('Q23009442'), CRM('P17'), ITO('European_Discoveries'));
store.add(ITO('European_Discoveries'), RDFS('label'), literal('European Discoveries'));
store.add(ITO('European_Discoveries'), RDF('type'), CRM('E5'));
store.add(ITO('European_Discoveries'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1920-1990'));
store.add(ITO('European_Discoveries'), CRM('P10'), WD('Q17631847'));
store.add(WD('Q17631847'), RDF('type'), CRM('E2'));
store.add(WD('Q17631847'), RDF('type'), WD('Q7167'));
store.add(WD('Q17631847'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(WD('Q23009442'), CRM('P14'), ITO('European_Collectors'));
store.add(ITO('European_Collectors'), RDFS('label'), literal('European Collectors'));
store.add(ITO('European_Collectors'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('European_Discoveries'));
store.add(ITO('European_Collectors'), RDF('type'), CRM('E39'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E29'), RDFS('label'), literal('Design or Procedure'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E96'), RDFS('label'), literal('Purchase'));
store.add(CRM('E74'), RDFS('label'), literal('Group'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q220659'), RDFS('label'), literal('Archaeological Artefact'));
store.add(WD('Q839954'), RDFS('label'), literal('Archaeological Site'));
store.add(WD('Q129072'), RDFS('label'), literal('Persepolis'));
store.add(WD('Q794'), RDFS('label'), literal('Iran'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q483501'), RDFS('label'), literal('Artist'));
store.add(WD('Q4673399'), RDFS('label'), literal('Achaemenid Architecture'));
store.add(WD('Q23757'), RDFS('label'), literal('Limestone'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q18345888'), RDFS('label'), literal('Purchase and Sale Agreement '));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q46'), RDFS('label'), literal('Europe'));
store.add(WD('Q389688'), RDFS('label'), literal('Achaemenid Empire'));
store.add(WD('Q23009442'), RDFS('label'), literal('Removal'));
store.add(WD('Q7167'), RDFS('label'), literal('Colonialism'));
store.add(WD('Q17631847'), RDFS('label'), literal('European colonialism'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\11_Asia_The_Achaemenid_Reliefs.rdf');