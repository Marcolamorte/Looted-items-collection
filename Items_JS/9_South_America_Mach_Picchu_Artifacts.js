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
store.add(WD('Q2668072'), RDF('type'), CRM('E24'));
store.add(WD('Q2668072'), RDF('type'), WD('Q220659'));
store.add(WD('Q2668072'), DC('subject'), literal('Machu Picchu Site (Peru)'));
store.add(WD('Q2668072'), DC('subject'), literal('Excavations (Archaeology)'));
store.add(WD('Q2668072'), DC('subject'), literal('Indians of South America'));
store.add(WD('Q2668072'), DC('title'), literal('The Machu Picchu Artifacts Collection'));
store.add(WD('Q2668072'), DC('description'), literal ("The 'Machu Picchu Artifacts' refer to a collection of objects discovered at Machu Picchu, one of the most iconic Peru's archaeological sites, which provide insight into the daily life, culture, and society of the Inca civilization and symbol of the Andean cultural heritage."));
store.add(WD('Q2668072'), DCTERMS('spatial'), WD('Q676203'));
store.add(WD('Q676203'), RDF('type'), CRM('E53'));
store.add(WD('Q676203'),  WDT('P17'),  WD('Q419'));
store.add(WD('Q419'), RDF('type'), CRM('E53'));
store.add(WD('Q2668072'), DC('type'), literal('Ceramics'));
store.add(WD('Q2668072'), DC('type'), literal('Metalworks'));
store.add(WD('Q2668072'), DC('type'), literal('Jewelry'));
store.add(WD('Q2668072'), DC('type'), literal('Textile work'));
store.add(WD('Q2668072'), DCTERMS('created'), literal('15th-16th century'));
store.add(WD('Q2668072'), DC('creator'), WD('Q1294787'));
store.add(WD('Q1294787'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q1294787'), WDT('P361'), WD('Q9544342'));
store.add(WD('Q9544342'), RDF('type'), CRM('E74'));
store.add(WD('Q9544342'), RDF('type'), CRM('E39'));
store.add(WD('Q2668072'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), CRM('P3'), literal('The collection contains between 4,000 and 40,000 artifacts, though the exact count depends on how the artifacts are catalogued. According to Yale University, about 350 of these artifacts are of a high enough quality to display in a museum.The museum-quality artifacts are mostly ceramics, but also include silver and bronze objects, stoneware cooking implements, and several vases for storing corn beer, an important beverage in Incan daily life. The “research collection” also contains human remains, as well as ceramic fragments.'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), ITO('Casa_Concha_Museum'));
store.add(ITO('Casa_Concha_Museum'),RDFS('label'), literal('Casa Concha Museum'));
store.add(ITO('Casa_Concha_Museum'), RDF('type'), CRM('E39'));
store.add(ITO('Casa_Concha_Museum'), RDF('type'), CRM('E53'));
store.add(ITO('Casa_Concha_Museum'), RDF('type'), WD('Q33506'));
store.add(WD('Q2668072'), CRM('P44'), ITO('Well_preserved_state'));
store.add(ITO('Well_preserved_state'), RDF('type'), CRM('E3'));
store.add(ITO('Well_preserved_state'), RDFS('label'), literal('Well preserved state'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q22731'));
store.add(WD('Q22731'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q45621'));
store.add(WD('Q45621'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q287'));
store.add(WD('Q287'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q897'));
store.add(WD('Q897'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q753'));
store.add(WD('Q753'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q34095'));
store.add(WD('Q34095'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P45'), WD('Q42329'));
store.add(WD('Q42329'), RDF('type'), CRM('E57'));
store.add(WD('Q2668072'), CRM('P52'), ITO('Casa_Concha_Museum'));
store.add(ITO('Casa_Concha_Museum'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), ITO('Repatriation_agreement'));
store.add(ITO('Repatriation_agreement'),RDFS('label'), literal('Repatriation agreement'));
store.add(ITO('Repatriation_agreement'), RDF('type'), CRM('E8'));
store.add(ITO('Repatriation_agreement'), DCTERMS('temporal'), literal('2010-2011'));
store.add(WD('Q2668072'), CRM('P51'), WD('Q122945'));
store.add(WD('Q2668072'), CRM('P53'), WD('Q122945'));
store.add(WD('Q122945'), RDF('type'), CRM('E39'));
store.add(WD('Q122945'), RDF('type'), CRM('E53'));
store.add(WD('Q122945'), RDF('type'), WD('Q33506'));
store.add(WD('Q122945'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), ITO('Repatriation_agreement'));
store.add(WD('Q122945'), WDT('P361'), WD('Q49112'));
store.add(WD('Q49112'), RDF('type'), CRM('E74'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('Repatriation_agreement'));
store.add(WD('Q2668072'), CRM('P55'), ITO('Casa_Concha_Museum'));
store.add(ITO('Casa_Concha_Museum'), WDT('P276'), WD('Q5582862'));
store.add(WD('Q5582862'), RDF('type'), CRM('E53'));
store.add(WD('Q5582862'), WDT('P17'), WD('Q419'));
store.add(WD('Q5582862'), WDT('P1566'), literal('3941584', XSD('integer')));
store.add(WD('Q5582862'), GEO('lat'), literal('-13.52264', XSD('float')));
store.add(WD('Q5582862'), GEO('long'), literal('-71.96734', XSD('float')));
store.add(WD('Q5582862'), OWL('sameAs'), namedNode('http://sws.geonames.org/3941584/'));
store.add(WD('Q2668072'), CRM('P27'), WD('Q676203'));
store.add(WD('Q676203'), WDT('P1566'), literal('3935634', XSD('integer')));
store.add(WD('Q676203'), GEO('lat'), literal('-13.16357', XSD('float')));
store.add(WD('Q676203'), GEO('long'), literal('-72.54574', XSD('float')));
store.add(WD('Q676203'), OWL('sameAs'), namedNode('http://sws.geonames.org/3935634/'));
store.add(WD('Q2668072'), CRM('P26'), WD('Q122945'));
store.add(WD('Q122945'), WDT('P17'), WD('Q30'));
store.add(WD('Q122945'), WDT('P1566'), literal('9253124', XSD('integer')));
store.add(WD('Q122945'), GEO('lat'), literal('41.31754', XSD('float')));
store.add(WD('Q122945'), GEO('long'), literal('-72.91986', XSD('float')));
store.add(WD('Q122945'), OWL('sameAs'), namedNode('http://sws.geonames.org/9253124/'));
store.add(WD('Q2668072'), CRM('P51'), WD('Q9544342'));
store.add(WD('Q9544342'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), ITO('Peruvian_government_agreement'));
store.add(ITO('Peruvian_government_agreement'),RDFS('label'), literal('Peruvian government agreement'));
store.add(ITO('Peruvian_government_agreement'), RDF('type'), CRM('E8'));
store.add(ITO('Peruvian_government_agreement'), CRM('P17'), ITO('Yale_University_scientific_expeditions'));
store.add(ITO('Yale_University_scientific_expeditions'),RDFS('label'), literal('Yale University scientific expeditions'));
store.add(ITO('Yale_University_scientific_expeditions'), RDF('type'), CRM('E5'));
store.add(ITO('Yale_University_scientific_expeditions'), RDF('type'), WD('Q2401485'));
store.add(ITO('Yale_University_scientific_expeditions'), DCTERMS('spatial'), WD('Q676203'));
store.add(ITO('Yale_University_scientific_expeditions'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1911-1915'));
store.add(ITO('Yale_University_scientific_expeditions'), CRM('P10'), WD('Q605269'));
store.add(WD('Q605269'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(WD('Q605269'), RDF('type'), CRM('E2'));
store.add(WD('Q605269'), RDF('type'), WD('Q7260'));
store.add(ITO('Peruvian_government_agreement'), CRM('P14'), WD('Q131010'));
store.add(WD('Q131010'),  DC('description'), literal('President of Perù (1863-1932)'));
store.add(WD('Q131010'), RDF('type'), CRM('E21'));
store.add(WD('Q131010'), RDF('type'), CRM('E39'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('Peruvian_government_agreement'));
store.add(WD('Q2668072'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), ITO('Yale_University_scientific_expeditions'));
store.add(WD('Q2668072'), WDT('P575'), literal('1911', XSD('gYear')));
store.add(WD('Q237220'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('Yale_University_scientific_expeditions'));
store.add(WD('Q237220'), RDF('type'), CRM('E21'));
store.add(WD('Q237220'), RDF('type'), CRM('E39'));
store.add(WD('Q237220'), WDT('P106'), WD('Q11900058'));
store.add(WD('Q237220'), WDT('P61'), WD('Q2668072'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E74'), RDFS('label'), literal('Group'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(WD('Q220659'), RDFS('label'), literal('Archaeological Artefact'));
store.add(WD('Q676203'), RDFS('label'), literal('Machu Picchu'));
store.add(WD('Q419'), RDFS('label'), literal('Perù'));
store.add(WD('Q1294787'), RDFS('label'), literal('Artisan'));
store.add(WD('Q9544342'), SKOS('altLabel'), literal('Inca People'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q22731'), RDFS('label'), literal('Stone'));
store.add(WD('Q45621'), RDFS('label'), literal('Ceramic'));
store.add(WD('Q287'), RDFS('label'), literal('Wood'));
store.add(WD('Q897'), RDFS('label'), literal('Gold'));
store.add(WD('Q753'), RDFS('label'), literal('Copper'));
store.add(WD('Q34095'), RDFS('label'), literal('Bronze'));
store.add(WD('Q42329'), RDFS('label'), literal('Wool'));
store.add(WD('Q122945'), RDFS('label'), literal('Yale Peabody Museum'));
store.add(WD('Q49112'), RDFS('label'), literal('Yale University'));
store.add(WD('Q5582862'), RDFS('label'), literal('Cusco'));
store.add(WD('Q30'), RDFS('label'), literal('United States of America'));
store.add(WD('Q605269'), RDFS('label'), literal('American Imperialism'));
store.add(WD('Q2401485'), RDFS('label'), literal('Expedition'));
store.add(WD('Q7260'), RDFS('label'), literal('Imperialism'));
store.add(WD('Q131010'), RDFS('label'), literal('Augusto B. Leguía'));
store.add(WD('Q237220'), RDFS('label'), literal('Hiram Bingham III'));
store.add(WD('Q11900058'), RDFS('label'), literal('Explorer'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\9_South_America_Mach_Picchu_Artifacts.rdf');