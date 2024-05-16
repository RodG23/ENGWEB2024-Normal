import csv
import json
import re

def csv_to_json(csv_path, json_path):
    data = []
    with open(csv_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=';')
        for row in csv_reader:
            str = row["precoContratual"]
            num = re.sub(r',','.',str)
            row['precoContratual'] = float(num) 
            data.append(row)
    
    with open(json_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

csv_path = 'contratos2024.csv'
json_path = 'contratos2024.json'

# Chama a função para converter CSV para JSON
csv_to_json(csv_path, json_path)
