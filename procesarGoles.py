import json

def convert_to_json(file_path):
    goals = []
    with open(file_path, 'r') as file:
        for line in file:
            if line.strip() and not line.startswith('//'):
                parts = line.strip().split(';')
                # goal = {
                #     "goalDate": parts[0],
                #     "AgainstTeam": parts[1],
                #     "GoalScorer": parts[2],
                #     "minute": parts[3],
                #     "video": parts[4]
                # }
                goal = parts[2]
                goals.append(goal)
    return json.dumps(goals, indent=4)

# Example usage
file_path = './lista-de-goles.txt'
json_output = convert_to_json(file_path)
print(json_output)