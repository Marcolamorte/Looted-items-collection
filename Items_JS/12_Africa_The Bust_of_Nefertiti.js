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
store.add(WD('Q582172'), RDF('type'), CRM('E24'));
store.add(WD('Q582172'), RDF('type'), WD('Q10855061'));
store.add(WD('Q582172'), DC('subject'), literal('Nefertiti Queen'));
store.add(WD('Q582172'), DC('subject'), literal('Busts'));
store.add(WD('Q582172'), DC('subject'), literal('Egyptian Art'));
store.add(WD('Q582172'), DC('title'), literal('The Bust of Nefertiti'));
store.add(WD('Q582172'), DC('description'), literal ("One of the most iconic and famous works of ancient Egyptian art, symbolizing the timeless beauty and power of Queen Nefertiti, the Great Royal Wife of Pharaoh Akhenaten.  Widely admired for its artistic mastery and realism,  The bust is carved from limestone and covered with a layer of stucco with a delicately painted surface that highlights the queen's refined features such as her high cheekbones, full lips, and graceful neck. . She is depicted wearing a flat-topped blue crown with a golden diadem, symbolizing her royal status."));
store.add(WD('Q582172'), DC('type'), literal('bust'));
store.add(WD('Q582172'), DCTERMS('spatial'), WD('Q5736'));
store.add(WD('Q5736'), RDF('type'), CRM('E53'));
store.add(WD('Q5736'), WDT('P17'), WD('Q79'));
store.add(WD('Q79'), RDF('type'), CRM('E53'));
store.add(WD('Q5736'), WDT('P31'), WD('Q839954'));
store.add(WD('Q582172'), DCTERMS('created'), literal('1345 BC'));
store.add(WD('Q582172'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), CRM('P14'), WD('Q157316'));
store.add(WD('Q582172'), DC('creator'), WD('Q281100'));
store.add(WD('Q281100'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q281100'), WDT('P106'), WD('Q1281618'));
store.add(WD('Q582172'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(ITO('Good_State_Overall'), CRM('P3'), literal("Missing inlay in the left eye .The painted surface, though largely intact, has experienced some fading and wear over time. There are minor cracks and chips in the stucco layer, which covers the limestone core."));
store.add(WD('Q582172'), CRM('P43'), WD('Q25288'));
store.add(WD('Q582172'), CRM('P43'), WD('Q35059'));
store.add(WD('Q582172'), CRM('P43'), WD('Q208826'));
store.add(WD('Q25288'), CRM('P90'), literal('20', XSD('float')));
store.add(WD('Q25288'), CRM('P91'), literal('kilogram'));
store.add(WD('Q25288'), RDF('type'), CRM('E54'));
store.add(WD('Q35059'), CRM('P90'), literal('30', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q208826'), CRM('P90'), literal('48', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('centimeter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(WD('Q582172'), CRM('P45'), WD('Q23757'));
store.add(WD('Q23757'), RDF('type'), CRM('E57'));
store.add(WD('Q582172'), CRM('P45'), WD('Q274988'));
store.add(WD('Q274988'), RDF('type'), CRM('E57'));
store.add(WD('Q582172'), CRM('P52'), WD('Q157316'));
store.add(WD('Q157316'), RDF('type'), CRM('E39'));
store.add(WD('Q157316'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DC('date'), literal('1920', XSD('gYear')));
store.add(WD('Q582172'), CRM('P51'), WD('Q84859'));
store.add(WD('Q84859'), RDF('type'), CRM('E39'));
store.add(WD('Q84859'),  WDT('P106'), WD('Q131524'));
store.add(WD('Q84859'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q582172'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q707482'));
store.add(WD('Q582172'), CRM('P55'), WD('Q157316'));
store.add(WD('Q157316'), RDF('type'), CRM('E53'));
store.add(WD('Q157316'), RDF('type'), WD('Q33506'));
store.add(WD('Q157316'), WDT('P276'), WD('Q64'));
store.add(WD('Q157316'), WDT('P17'), WD('Q183'));
store.add(WD('Q157316'), WDT('P1566'), literal('7911196', XSD('integer')));
store.add(WD('Q157316'), GEO('lat'), literal('52.5202', XSD('float')));
store.add(WD('Q157316'), GEO('long'), literal('13.39774', XSD('float')));
store.add(WD('Q157316'), OWL('sameAs'), namedNode('http://sws.geonames.org/7911196/'));
store.add(WD('Q582172'), CRM('P26'), WD('Q64'));
store.add(WD('Q582172'), CRM('P27'), WD('Q5736'));
store.add(WD('Q157316'), WDT('P1566'), literal('347585', XSD('integer')));
store.add(WD('Q157316'), GEO('lat'), literal('27.65', XSD('float')));
store.add(WD('Q157316'), GEO('long'), literal('30.96667', XSD('float')));
store.add(WD('Q157316'), OWL('sameAs'), namedNode('http://sws.geonames.org/347585/'));
store.add(WD('Q582172'), CRM('P51'), WD('Q40930'));
store.add(WD('Q40930'), RDF('type'), CRM('E21'));
store.add(WD('Q40930'), RDF('type'), WD('Q116'));
store.add(WD('Q40930'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q12772819'));
store.add(WD('Q12772819'), RDF('type'), CRM('E7'));
store.add(WD('Q12772819'), WDT('P575'), literal('1912-12-06', XSD('date')));
store.add(WD('Q12772819'),CRM('P17'), ITO('German_Archeological_Expedition'));
store.add(ITO('German_Archeological_Expedition'), RDFS('label'), literal('German archeological expedition'));
store.add(ITO('German_Archeological_Expedition'), RDF('type'), CRM('E5'));
store.add(ITO('German_Archeological_Expedition'), RDF('type'), WD('Q2401485'));
store.add(ITO('German_Archeological_Expedition'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1911-1912'));
store.add(ITO('German_Archeological_Expedition'), CRM('P10'), WD('Q17631847'));
store.add(WD('Q17631847'), RDF('type'), CRM('E2'));
store.add(WD('Q17631847'), RDF('type'), WD('Q7167'));
store.add(WD('Q17631847'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(ITO('German_Archeological_Expedition'), CRM('P14'), WD('Q314420'));
store.add(WD('Q314420'), RDF('type'), CRM('E39'));
store.add(WD('Q12772819'),CRM('P14'), WD('Q60758'));
store.add(WD('Q60758'), RDF('type'), CRM('E39'));
store.add(WD('Q60758'), WDT('P106'), WD('Q3621491'));
store.add(WD('Q60758'), WDT('P463'), WD('Q314420'));
store.add(WD('Q60758'), WDT('P61'), WD('Q582172'));
store.add(WD('Q60758'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('German_Archeological_Expedition'));
store.add(WD('Q582172'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q12772819'));
store.add(WD('Q582172'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q12772819'));
store.add(WD('Q582172'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), ITO('German_Archeological_Expedition'));



// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(CRM('E87'), RDFS('label'), literal('Curation Activity'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q10855061'), RDFS('label'), literal("Archaeological Find"));
store.add(WD('Q5736'), RDFS('label'), literal("Amarna"));
store.add(WD('Q79'), RDFS('label'), literal("Iran"));
store.add(WD('Q839954'), RDFS('label'), literal('Archaeological Site'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(WD('Q157316'), RDFS('label'), literal('Neues Museum'));
store.add(WD('Q281100'), RDFS('label'), literal('Thutmose'));
store.add(WD('Q1281618'), RDFS('label'), literal('Sculptor'));
store.add(WD('Q25288'),  RDFS('label'), literal('Weight'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q23757'), RDFS('label'), literal('Limestone'));
store.add(WD('Q274988'), SKOS('altLabel'), literal('Stucco'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q84859'), RDFS('label'), literal('James Simon'));
store.add(WD('Q131524'), RDFS('label'), literal('Enterpreneur'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q64'), RDFS('label'), literal('Berlin'));
store.add(WD('Q183'), RDFS('label'), literal('Germany'));
store.add(WD('Q40930'), RDFS('label'), literal('Nefertiti'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add(WD('Q12772819'), RDFS('label'), literal('Discovery'));
store.add(WD('Q2401485'), RDFS('label'), literal('Expedition'));
store.add(WD('Q17631847'), RDFS('label'), literal('European Colonialism'));
store.add(WD('Q7167'), RDFS('label'), literal('Colonialism'));
store.add(WD('Q314420'), RDFS('label'), literal('Deutsche Orient-Gesellschaft'));
store.add(WD('Q60758'), RDFS('label'), literal('Ludwig Borchardt'));
store.add(WD('Q3621491'), RDFS('label'), literal('Archeologist'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\12_Africa_The Bust_of_Nefertiti.rdf');