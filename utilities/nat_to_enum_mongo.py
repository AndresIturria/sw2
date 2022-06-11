with open('nationalities.txt', "r") as f:
	with open('result_mongo.txt', "w") as g:
		result = []
		for line in f:
			result.append(line.strip("\n"))
		
		print(result, file = g)