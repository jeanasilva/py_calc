from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/api/interest-rate')
def interestrate():
        return '0,01'
		
vi = float( input('Valor inicial: ') )

i = float ( input('Rentabilidade mensal: ') )

i = i / 100

m = int( input('Meses que vai deixar rendendo: ') )

vf = vi * (1+i)**m

print('Valor apos ',m,' meses: R$ ',vf)