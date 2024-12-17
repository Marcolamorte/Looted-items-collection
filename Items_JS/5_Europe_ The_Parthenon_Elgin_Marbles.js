// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';



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
store.add(WD('Q606662'), RDF('type'), CRM('E24'));
store.add(WD('Q606662'), DCTERMS('spatial'), WD('Q10288'));
store.add(WD('Q10288'), RDF('type'), CRM('E53'));
store.add(WD('Q10288'), CRM('P89'), WD('Q131013'));
store.add(WD('Q131013'), RDF('type'), CRM('E53'));
store.add(WD('Q131013'), WDT('P17'),  WD('Q41'));
store.add(WD('Q41'), RDF('type'), CRM('E53'));
store.add(WD('Q606662'), DCTERMS('created'), literal('447B.C.-432B.C.'));
store.add(WD('Q606662'), DC('description'), literal ("The Parthenon Sculptures often referred to as the Elgin Marbles, are a collection of classical Greek marble sculptures that originally adorned the Parthenon temple on the Acropolis of Athens. These artifacts, of great relevance to the Greek cultural heritage, are at the center of a long-standing cultural and political debate and subject of ongoing repatriation demands by Greek government."));
store.add(WD('Q606662'), DC('subject'), literal('Parthenon (Athens, Greece)'));
store.add(WD('Q606662'), DC('subject'), literal('Elgin marbles'));
store.add(WD('Q606662'), DC('subject'), literal('Athens Antiquites'));
store.add(WD('Q606662'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q6373'));
store.add(WD('Q6373'), RDF('type'), CRM('E39'));
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q606662'), DC('title'), literal('The Parthenon Elgin Marbles collection'));
store.add(WD('Q606662'), DC('type'), literal('sculpture'));
store.add(WD('Q606662'), DC('type'), literal('marble reliefs'));
store.add(WD('Q606662'), DC('creator'), WD('Q177302'));
store.add(WD('Q177302'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q606662'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add (ITO('Good_State_Overall'), CRM('P3'), literal ('Some sculptures present damaged or missing parts.'));
store.add(WD('Q606662'), CRM('P45'), WD('Q40861'));
store.add(WD('Q40861'), RDF('type'), CRM('E57'));
store.add(WD('Q606662'), CRM('P52'), WD('Q6373'));
store.add(WD('Q6373'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DC('date'), literal('1816', XSD('gYear')));
store.add(WD('Q606662'), CRM('P51'), WD('Q335098'));
store.add(WD('Q335098'), RDF('type'), CRM('E39'));
store.add(WD('Q335098'), WDT('P106'), WD('Q193391'));
store.add(WD('Q335098'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q18345888'));
store.add(WD('Q18345888'), RDF('type'), CRM('E96'));
store.add(WD('Q18345888'), DC('date'), literal('1816', XSD('gYear')));
store.add(WD('Q6063'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q18345888'));
store.add(WD('Q6063'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q606662'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q18345888'));
store.add(WD('Q606662'), CRM('P55'), WD('Q6373'));
store.add(WD('Q6373'),  WDT('P131'), WD('Q84'));
store.add(WD('Q6373'),  WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAs'), namedNode('http://sws.geonames.org/6697862/'));
store.add(WD('Q606662'), CRM('P26'), WD('Q84'));
store.add(WD('Q84'), RDF('type'), CRM('E53'));
store.add(WD('Q606662'), CRM('P27'), WD('Q10288'));
store.add(WD('Q10288'), WDT('P1566'), literal('8354432', XSD('integer')));
store.add(WD('Q10288'), GEO('lat'), literal('37.97153', XSD('float')));
store.add(WD('Q10288'), GEO('long'), literal('23.72656', XSD('float')));
store.add(WD('Q10288'), OWL('sameAs'), namedNode('http://sws.geonames.org/8354432/'));
store.add(WD('Q606662'), CRM('P51'), ITO('Athenian_government'));
store.add(ITO('Athenian_government'), RDF('type'), CRM('E39'));
store.add(ITO('Athenian_government'), RDFS('label'), literal('Athenian government'));
store.add(ITO('Athenian_government'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD ('Q23009442'));
store.add(WD('Q23009442'), RDF('type'), CRM('E7'));
store.add(WD('Q23009442'), CRM('P17'), WD('Q1130651'));
store.add(WD('Q23009442'), DCTERMS('spatial'), WD('Q10288'));
store.add(WD('Q23009442'), CRM('P14'), WD('Q335098'));
store.add(WD('Q23009442'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1801-1812'));
store.add(WD('Q23009442'), CRM('P10'), WD('Q871792'));
store.add(WD('Q871792'), RDF('type'), CRM('E2'));
store.add(WD('Q871792'), DCTERMS('temporal'), literal('1453-1821'));
store.add(WD('Q606662'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q23009442'));
store.add(WD('Q606662'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q1130651'));
store.add(WD('Q1130651'), RDF('type'), WD('Q1422253'));
store.add(WD('Q1130651'), WDT('P1027'), WD('Q18871'));
store.add(WD('Q18871'), RDF('type'), CRM('E39'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E3'), RDFS('label'), literal('Condition state'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E96'), RDFS('label'), literal('Purchase'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(WD('Q10288'), RDFS('label'), literal('Parthenon'));
store.add(WD('Q131013'), RDFS('label'), literal('Acropolis of Athens'));
store.add(WD('Q41'), RDFS('label'), literal('Greece'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q177302'), RDFS('label'), literal('Phidias'));
store.add(WD('Q40861'), RDFS('label'), literal('Marble'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q335098'), RDFS('label'), literal('Thomas Bruce, 7th Earl of Elgin'));
store.add(WD('Q18345888'), RDFS('label'), literal('Purchase and Sale Agreement '));
store.add(WD('Q6063'), RDFS('label'), literal('Government of the United Kingdom '));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q23009442'), RDFS('label'), literal('Removal'));
store.add(WD('Q1130651'), RDFS('label'), literal('Firman'));
store.add(WD('Q193391'), RDFS('label'), literal('Diplomat'));
store.add(WD('Q871792'), RDFS('label'), literal('Ottoman Greece'));
store.add(WD('Q18871'), RDFS('label'), literal('Sublime Porte'));
store.add(WD('Q1422253'), RDFS('label'), literal('Royal Charter'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\5_Europe_The_Parthenon_Elgin_Marbles.rdf');