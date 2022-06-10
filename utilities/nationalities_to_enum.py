with open('nationalities.txt', "r") as f:
	with open('result.txt', "w") as g:
		for line in f:
			aux = "<xs:enumeration value=\"{}\"/>".format(line.strip("\n"))
			print(aux, file=g)