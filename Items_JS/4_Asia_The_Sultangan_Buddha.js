// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';

// Crea un nuovo grafo RDF
const store = graph();

// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const WDT = Namespace('https://www.wikidata.org/wiki/Property');
const WD = Namespace('https://www.wikidata.org/wiki/');




// Aggiungi tutte le triple al grafo
store.add(CRM('E2_Temporal_Entity_1'), RDFS('subClassOf'), CRM('E2')); 
store.add(CRM('E2_Temporal_Entity_1'), RDFS('label'), literal('Gupta-Pala Period sculpture')); 
store.add(CRM('E2_Temporal_Entity_2'), RDFS('subClassOf'), CRM('E2')); 
store.add(CRM('E2_Temporal_Entity_2'), RDFS('label'), literal('British Imperialism in China')); 
store.add(DCTERMS('PeriodOfTime_1'), RDFS('subClassOf'), DCTERMS('PeriodOfTime')); 
store.add(DCTERMS('PeriodOfTime_1'), RDFS('label'), literal('6th-7th century')); 
store.add(DCTERMS('PeriodOfTime_2'), RDFS('subClassOf'), DCTERMS('PeriodOfTime')); 
store.add(DCTERMS('PeriodOfTime_2'), RDFS('label'), literal('19th-20th century')); 
store.add(DCTERMS('PeriodOfTime_3'), RDFS('subClassOf'), DCTERMS('PeriodOfTime')); 
store.add(DCTERMS('PeriodOfTime_3'), RDFS('label'), literal('1845-1952')); 
store.add(WD('Q7636803'),  RDF('type'), CRM('E24'));
store.add(WD('Q7636803'), DCTERMS('spatial'), WD('Q668'));
store.add(WD('Q668'),  RDF('type'), CRM('E53'));
store.add(WD('Q668'), RDFS('label'), literal('India'));
store.add(WD('Q7636803'), DC('creator'), DCTERMS('Agent'));
store.add(DCTERMS('Agent'), RDFS('label'), literal('Unknown'));
store.add(WD('Q7636803'), DCTERMS('coverage'), CRM('E2_Temporal_Entity_1'));
store.add(CRM('E2_Temporal_Entity_1'),  CRM('P4'), DCTERMS('PeriodOfTime_1'));
store.add(WD('Q7636803'), DC('subject'), literal('Buddhist sculpture'));
store.add(WD('Q7636803'), DC('subject'), literal('Gupta art'));
store.add(WD('Q7636803'), DC('subject'), literal('Buddhist antiquities'));
store.add(WD('Q7636803'), DC('title'), literal('Sultanganj Buddha'));
store.add(WD('Q7636803'), DC('type'), literal('Sculpture'));
store.add(WD('Q7636803'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q765814'));
store.add(WD('Q765814'), RDF('type'), CRM('E29'));
store.add(WD('Q765814'), RDFS('label'), literal('lost-wax casting'));
store.add(WD('Q7636803'), CRM('P129'),  WD('Q1200750'));
store.add(WD('Q1200750'), RDFS('label'), literal('The Buddha is depicted in a standing posture, with his right hand raised in the abhaya mudra, a gesture that symbolizes protection, reassurance, and dispelling fear. His left hand is in a position that likely held a part of his robe". He is shown wearing a simple monk’s robe, draped over both shoulders, a common representation in Buddhist art'));
store.add(WD('Q7636803'), CRM('P44'), CRM('E3'));
store.add(CRM('E3'), RDFS('label'), literal('Well preserved'));
store.add(CRM('E3'), CRM('P3'), CRM('E62'));
store.add(CRM('E62'), RDFS('label'), literal("Greenish and brown coloration due to natural oxidation.There are few small holes and thin areas in certain parts, particularly near the edges.There are some missing parts,rticularly the fingers of the Buddha's raised right hand, which have been damaged or eroded. The left hand may also show signs of breakage or erosion"));
store.add(WD('Q7636803'), CRM('P43'), CRM('E54'));
store.add (CRM('E54'), RDFS('label'), literal("[Weight: 105.602 carats (21.1204 g), Length:3.6 cm (1.4 in), Width:3.2 cm (1.3 in), Depth:1.3 cm (0.5 in)]"));
store.add(WD('Q7636803'), CRM('P45'), WD('Q753'));
store.add(WD('Q753'), RDFS('label'), literal('Copper'));
store.add(WD('Q7636803'), CRM('P52'), WD('Q1799857'));
store.add(WD('Q1799857'), RDF('type'), CRM('E39'));
store.add(WD('Q1799857'), RDFS('label'), literal('Birmingham Museum and Art Gallery '));








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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Desing and Technologies\\Vitali project\\rdf_files_graphs\\4_Asia_The_Sultanganj_Buddha.rdf');