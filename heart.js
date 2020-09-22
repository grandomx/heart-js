  ('12v216v2'+	'e111v312'+
'v3e1v7e1v7e1v7e112v6e114v5'+
'e116v4e118v3e11713v2e11913v1')
.replace(/[1ve]\d/g, function
  (c) {return Array(-~c[1]).
 	join({1:' ',v:'Boop'
		,e:'\n'}[c[0
			]])})