from rdflib import Graph, Literal, Namespace, RDF, URIRef
import xml.etree.ElementTree as ET
import uuid

# Define namespaces for CIDOC CRM, DCTerms, and Wikidata
CRM = Namespace("https://www.cidoc-crm.org/html/cidoc_crm_v7.1.3.html#")
DC = Namespace ("http://purl.org/dc/elements/1.1/")
DCTERMS = Namespace("http://purl.org/dc/terms/")
XSD = Namespace ("http://www.w3.org/2001/XMLSchema")
WIKIDATA_ENTITIES = Namespace("https://www.wikidata.org/wiki/Property:")
WIKIDATA_PROPERTIES= Namespace ("https://www.wikidata.org/wiki/Property:")


# Initialize the RDF graph
g = Graph()
g.bind("crm", CRM)
g.bind ("dc", DC)
g.bind("dcterms", DCTERMS)
g.bind("wd", WIKIDATA_ENTITIES)
g.bind ("wdt", WIKIDATA_PROPERTIES)

# Parse the XML file
tree = ET.parse(r"C:\Users\HWRUser\Desktop\DHDK Course\Web Desing and Technologies\Vitali project\Items_XML\1_Africa_ Benin Bronzes.drawio.xml")
root = tree.getroot()

# Find the <diagram> element and get the "name" attribute of the object
diagram = root.find('diagram')  # Looks for the first <diagram> child of <mxfile>

if diagram is not None:
    diagram_name = diagram.get('name')  # Get the "name" attribute from <diagram>
    print("Diagram Name:", diagram_name)
    # Generate a UUID for this single object
    obj_id = str(uuid.uuid4())
    obj_uri = URIRef(f"http://VitaliProject_2024/object/{obj_id}")
    print (obj_uri)
else:
    print("No <diagram> element found.")
    
