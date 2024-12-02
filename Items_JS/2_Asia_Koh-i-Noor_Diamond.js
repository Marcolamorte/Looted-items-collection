// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize} from 'rdflib';
import { writeFile } from 'fs';

// Crea un nuovo grafo RDF
const store = graph();

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

// Aggiungi tutte le triple al grafo
store.add(WD('Q212797'), RDF('type'), CRM('E20'));
store.add(WD('Q212797'), DCTERMS('spatial'), WD('Q668'));
store.add(WD('Q668'), RDF('type'), CRM('E53'));
store.add(WD('Q212797'), DCTERMS('created'), literal('18th century'));
store.add(WD('Q212797'), DC('subject'), literal('Koh-i-noor (Diamond)'));
store.add(WD('Q212797'), DC('subject'), literal('Artifacts'));
store.add(WD('Q212797'), DC('subject'), literal('Crown jewels'));
store.add(WD('Q212797'), DC('title'), literal('Koh-i-Noor'));
store.add(WD('Q212797'), DC('type'), literal('Gemstone'));
store.add(WD('Q212797'), DC('description'), literal('The Koh-i-Noor - meaning "Mountain of Light" in Persian - is one of the most famous diamonds in the world. Originating in India, the diamond has a long and storied history, spanning several centuries and passing through the hands of various rulers and empires. It is a  symbol of colonial wealth extraction.'));
store.add(WD('Q212797'), DCTERMS('isPartOf'), WD('Q918264'));
store.add(WD('Q918264'), RDF('type'), CRM('E22'));
store.add(WD('Q212797'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add (ITO('Good_State_Overall'), CRM('P3'), literal("Today, it is known for being unusually 'alive' with light due to the way it refracts and reflects light, though it also has a notably broad culet that creates a dark spot when viewed directly from above."));
store.add(WD('Q212797'), CRM('P45'), WD('Q5283'));
store.add(WD('Q5283'), RDF('type'), CRM('E57'));
store.add(WD('Q212797'), CRM('P43'), WD('Q25288'));
store.add(WD('Q25288'), RDF('type'), CRM('E54'));
store.add(WD('Q25288'), CRM('P90'), literal('105.602', XSD('float')));
store.add(WD('Q25288'), CRM('P91'), literal('carats'));
store.add(WD('Q212797'), CRM('P43'), WD('Q36253'));
store.add(WD('Q36253'), RDF('type'), CRM('E54'));
store.add(WD('Q36253'), CRM('P90'), literal('3.6', XSD('float')));
store.add(WD('Q36253'), CRM('P91'), literal('centimeter'));
store.add(WD('Q212797'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q35059'), CRM('P90'), literal('3.2', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q212797'), CRM('P43'), WD('Q3250078'));
store.add(WD('Q3250078'), RDF('type'), CRM('E54'));
store.add(WD('Q3250078'), CRM('P90'), literal('1.3', XSD('float')));
store.add(WD('Q3250078'), CRM('P91'), literal('centimeter'));
store.add(WD('Q212797'), CRM('P52'), WD('Q43274'));
store.add(WD('Q43274'), RDF('type'), CRM('E21'));
store.add(WD('Q212797'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q7837116'));
store.add(WD('Q212797'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'),WD('Q7837116'));
store.add(WD('Q7837116'), RDF('type'), CRM('E5'));
store.add(WD('Q7837116'), DC('date'), literal('1849', XSD('gYear')));
store.add(WD('Q9439'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q7837116'));
store.add(WD('Q9439'), RDF('type'), CRM('E39'));
store.add(WD('Q333140'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q7837116'));
store.add(WD('Q333140'), RDF('type'),  CRM('E39'));
store.add(WD('Q212797'), CRM('P51'), WD('Q333140'));
store.add(WD('Q212797'), CRM('P50'), WD('Q1688607'));
store.add(WD('Q212797'), CRM('P55'), WD('Q1688607'));
store.add(WD('Q1688607'), RDF('type'),  CRM('E53'));
store.add(WD('Q1688607'),  WDT('P131'), WD('Q84'));
store.add(WD('Q1688607'),  WDT('P10689'), literal('136105050', XSD('integer')));
store.add(WD('Q1688607'), GEO('lat'), literal('51.51945,', XSD('float')));
store.add(WD('Q1688607'), GEO('long'), literal('-0.126472', XSD('float')));
store.add(WD('Q1688607'), OWL('sameAs'), namedNode('https://www.openstreetmap.org/way/136105050'));
store.add(WD('Q212797'), CRM('P27'), WD('Q22424'));
store.add(WD('Q22424'), RDF('type'), CRM('E53'));
store.add(WD('Q22424'), WDT('P17'), WD('Q668'));
store.add(WD('Q22424'), WDT('P1566'), literal('1167710', XSD('integer')));
store.add(WD('Q22424'), GEO('lat'), literal('30.85,', XSD('float')));
store.add(WD('Q22424'), GEO('long'), literal('72.31667', XSD('float')));
store.add(WD('Q22424'), OWL('sameAs'), namedNode('http://sws.geonames.org/1167710/'));
store.add(WD('Q212797'), CRM('P26'), WD('Q84'));
store.add(WD('Q84'), RDF('type'), CRM('E53'));
store.add(WD('Q212797'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q243590'));
store.add(WD('Q243590'), RDF('type'), CRM('E5'));
store.add(WD('Q243590'), DCTERMS('spatial'), WD('Q668'));
store.add(WD('Q243590'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DC('date'), literal("1848-04-18/1849-03-29"));
store.add(WD('Q243590'), CRM('P10'), ITO('British_Colonialism_in_India'));
store.add(ITO('British_Colonialism_in_India'), RDF('type'), WD('Q7167'));
store.add(ITO('British_Colonialism_in_India'), RDFS('label'), literal('British Colonialism in India'));
store.add(WD('Q7167'), RDF('type'), CRM('E2'));
store.add(ITO('British_Colonialism_in_India'), DCTERMS('temporal'), literal("1757-1947"));
store.add(WD('Q83164'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q243590'));
store.add(WD('Q83164'), RDF('type'), CRM('E39'));



// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E22'), RDFS('label'), literal("Human-made Object"));
store.add(CRM('E20'), RDFS('label'), literal("Biological Object"));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E53'), RDFS('label'), literal('Place'));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(WD('Q918264'), RDFS('label'), literal('Crown Jewels of the United Kingdom'));
store.add(WD('Q84'), RDFS('label'), literal("London"));
store.add(WD('Q243590'), RDFS('label'), literal("Second Anglo-Sikh war"));
store.add(WD('Q5283'), RDFS('label'), literal('Diamond'));
store.add(WD('Q333140'), RDFS('label'), literal("Maharaja Duleep Singh I"));
store.add(WD('Q1688607'), RDFS('label'), literal("Jewel Tower"));
store.add(WD('Q22424'), RDFS('label'), literal("Punjab"));
store.add(WD('Q43274'), RDFS('label'), literal("King Charles III"));
store.add(WD('Q7837116'), RDFS('label'), literal("Treaty of Lahore"));
store.add(WD('Q9439'), RDFS('label'), literal("Queen Victoria"));
store.add(WD('Q668'), RDFS('label'), literal("India"));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));
store.add(WD('Q83164'), SKOS('altLabel'), literal("British East India Company"));
store.add(WD('Q25288'),  RDFS('label'), literal('Weight'));
store.add(WD('Q36253'),  RDFS('label'), literal('Lenght'));
store.add(WD('Q3250078'),  RDFS('label'), literal('Depth'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));


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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Desing and Technologies\\Vitali project\\rdf_files_graphs\\2_Asia_Koh-i-Noor_Diamond.rdf');