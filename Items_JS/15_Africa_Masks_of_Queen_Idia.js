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
store.add(WD('Q18385381'), RDF('type'), CRM('E24'));
store.add(WD('Q18385381'), DC('subject'), literal('Benin Art'));
store.add(WD('Q18385381'), DC('subject'), literal('Masks'));
store.add(WD('Q18385381'), DC('subject'), literal('Idia Queen'));
store.add(WD('Q18385381'), DC('title'), literal('The Masks of Queen Idia'));
store.add(WD('Q18385381'), DCTERMS('created'), literal('16th century'));
store.add(WD('Q18385381'), DCTERMS('spatial'), WD('Q320704'));
store.add(WD('Q320704'), RDF('type'), CRM('E53'));
store.add(WD('Q320704'), WDT('P17'), WD('Q1033'));
store.add(WD('Q1033'), RDF('type'), CRM('E53'));
store.add(WD('Q18385381'), DC('type'), literal('Mask'));
store.add(WD('Q18385381'), DC('type'), literal('Pendant'));
store.add(WD('Q18385381'), DC('description'), literal('A couple of royal ivory masks representing the Queen Mother, central to Benin’s cultural heritage. This type of mask was worn by the Oba, on the hip, during important ceremonies.'));
store.add(WD('Q18385381'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q6373'));
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q6373'), RDF('type'), CRM('E39'));
store.add(WD('Q6373'), RDF('type'), WD('Q33506'));
store.add(WD('Q6373'), WDT('P131'), WD('Q84'));
store.add(CRM('E87'), CRM('P14'), WD('Q160236'))
store.add(WD('Q160236'), RDF('type'), CRM('E53'));
store.add(WD('Q160236'), RDF('type'), CRM('E39'));
store.add(WD('Q160236'), RDF('type'), WD('Q33506'));
store.add(WD('Q160236'), WDT('P276'), WD('Q60'));
store.add(WD('Q160236'), WDT('P17'), WD('Q30'));
store.add(WD('Q18385381'), DC('creator'), ITO('Benin_Artisans'));
store.add(ITO('Benin_Artisans'), RDFS('label'), literal('Benin Artisans'));
store.add(ITO('Benin_Artisans'), RDF('type'), WD('Q1294787'));
store.add(ITO('Benin_Artisans'), RDF('type'), DCTERMS('Agent'));
store.add(ITO('Benin_Artisans'), WDT('P361'), WD('Q1287326'));
store.add(WD('Q18385381'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(WD('Q18385381'), CRM('P43'), WD('Q208826'));
store.add(WD('Q208826'), CRM('P90'), literal('24.50', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('centimeter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(WD('Q18385381'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), CRM('P90'), literal('12.50', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q18385381'), CRM('P43'), WD('Q3250078'));
store.add(WD('Q3250078'), CRM('P90'), literal('6', XSD('float')));
store.add(WD('Q3250078'), CRM('P91'), literal('centimeter'));
store.add(WD('Q3250078'), RDF('type'), CRM('E54'));
store.add(WD('Q18385381'), CRM('P45'), WD('Q677'));
store.add(WD('Q677'), RDF('type'), CRM('E57'));
store.add(WD('Q18385381'), CRM('P45'), WD('Q82001'));
store.add(WD('Q82001'), RDF('type'), CRM('E57'));
store.add(WD('Q18385381'), CRM('P45'), WD('Q753'));
store.add(WD('Q753'), RDF('type'), CRM('E57'));
store.add(WD('Q18385381'), CRM('P52'), WD('Q6373'));
store.add(WD('Q6373'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), CRM('E96'));
store.add(CRM('E96'), DC('date'), literal('1910', XSD('gYear')));
store.add(WD('Q18385381'), CRM('P51'), WD('Q185664'));
store.add(WD('Q185664'), RDF('type'), CRM('E39'));
store.add(WD('Q185664'), WDT('P106'), CRM('Q3621491'));
store.add(WD('Q185664'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), CRM('E96'));
store.add(WD('Q18385381'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), CRM('E96'));
store.add(WD('Q18385381'), CRM('P51'), WD('Q11237'));
store.add(WD('Q11237'), RDF('type'), CRM('E39'));
store.add(WD('Q11237'), DC('description'), literal ('Vice President of the United States from 1974 to 1977'));
store.add(WD('Q11237'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DC('date'), literal('1972', XSD('gYear')));
store.add(WD('Q18385381'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'),WD('Q707482'));
store.add(WD('Q160236'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q18385381'), CRM('P52'), WD('Q160236'));
store.add(WD('Q18385381'), CRM('P55'), WD('Q160236'));
store.add(WD('Q160236'), WDT('P1566'), literal('5126698', XSD('integer')));
store.add(WD('Q160236'), GEO('lat'), literal('40.77955', XSD('float')));
store.add(WD('Q160236'), GEO('long'), literal('-73.96292', XSD('float')));
store.add(WD('Q160236'), OWL('sameAs'), namedNode('http://sws.geonames.org/5126698/'));
store.add(WD('Q18385381'), CRM('P55'), WD('Q6373'));
store.add(WD('Q6373'), WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAs'), namedNode('http://sws.geonames.org/6697862/'));
store.add(WD('Q18385381'), CRM('P27'), WD('Q110925320'));
store.add(WD('Q110925320'), RDF('type'), CRM('E53'));
store.add(WD('Q110925320'), WDT('P131'), WD('Q320704'));
store.add(WD('Q320704'),  WDT('P1566'), literal('2347283', XSD('integer')));
store.add(WD('Q320704'), GEO('lat'), literal('6.33815', XSD('float')));
store.add(WD('Q320704'), GEO('long'), literal('5.62575', XSD('float')));
store.add(WD('Q320704'), OWL('sameAs'), namedNode('http://sws.geonames.org/2347283/'));
store.add(WD('Q18385381'), CRM('P26'), WD('Q84'));
store.add(WD('Q18385381'), CRM('P51'), WD('Q16846394'));
store.add(WD('Q16846394'), RDF('type'), CRM('E39'));
store.add(WD('Q16846394'), RDF('type'), WD('Q116'));
store.add(WD('Q16846394'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(WD('Q192623'), CRM('P17'), WD('Q3966451'));
store.add(WD('Q3966451'), RDF('type'), WD('Q2401485'));
store.add(WD('Q3966451'), RDF('type'), CRM('E5'));
store.add(WD('Q3966451'), DC('date'), literal('1897', XSD('gYear')));
store.add(WD('Q3966451'), DCTERMS('spatial'), WD('Q320704'));
store.add(WD('Q3966451'), CRM('P10'), WD('Q179848'));
store.add(WD('Q179848'), RDF('type'), WD('Q7167'));
store.add(WD('Q179848'), RDF('type'), CRM('E2'));
store.add(WD('Q179848'), DCTERMS('temporal'), literal('1880-1914'));
store.add(WD('Q192623'), CRM('P14'), WD('Q172771'));
store.add(WD('Q172771'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q3966451'));
store.add(WD('Q172771'), RDF('type'), CRM('E39'));
store.add(WD('Q192623'), CRM('P14'), WD('Q7287880'));
store.add(WD('Q7287880'), RDF('type'), CRM('E39'));
store.add(WD('Q7287880'), WDT('P1706'), WD('Q172771'));
store.add(WD('Q7287880'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q3966451'));
store.add(WD('Q7287880'), DC('description'), literal('First high commissioner of the British Southern Nigeria Protectorate (1860-1909).'));
store.add(WD('Q18385381'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q192623'));
store.add(WD('Q18385381'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q192623'));
store.add(WD('Q18385381'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q3966451'));


// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'))
store.add(CRM('E96'), RDFS('label'), literal('Purchase'))
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add (CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q320704'), RDFS('label'), literal('Benin City'));
store.add(WD('Q1033'), RDFS('label'), literal('Nigeria'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q1287326'), RDFS('label'), literal('Edo People'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q160236'), RDFS('label'), literal('Metropolitan Museum of Art'));
store.add(WD('Q60'), RDFS('label'), literal('New York City'));
store.add(WD('Q30'), RDFS('label'), literal('United States of America'));
store.add(WD('Q1294787'), RDFS('label'), literal('Artisan'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q3250078'),  RDFS('label'), literal('Depth'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q82001'), RDFS('label'), literal('Ivory'));
store.add(WD('Q677'), RDFS('label'), literal('Iron'));
store.add(WD('Q753'), RDFS('label'), literal('Copper'));
store.add(WD('Q185664'), RDFS('label'), literal('Charles Gabriel Seligman'));
store.add(WD('Q3621491'), RDFS('label'), literal('Archeologist'));
store.add(WD('Q11237'), RDFS('label'), literal('Nelson Rockefeller'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q110925320'), RDFS('label'), literal('The royal palace of the Kingdom of Benin (Oba of Benin’s Palace)'));
store.add(WD('Q16846394'), RDFS('label'), literal('Queen Idia'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'))
store.add(WD('Q3966451'), RDFS('label'), literal('Benin Expedition of 1897'));
store.add(WD('Q2401485'), RDFS('label'), literal('Expedition'));
store.add(WD('Q179848'), RDFS('label'), literal('The Scramble for Africa'));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));
store.add(WD('Q172771'), SKOS('altLabel'), literal('British Royal Navy'));
store.add(WD('Q7287880'), RDFS('label'), literal("Ralph Moor"));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\15_Africa_Masks_of_Queen_Idia.rdf');