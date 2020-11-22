import numpy as np
import language_tool_python as lt
from pprint import pprint

import scraper

# from pprint import pprint

def make_Markovs(headlines):
    """takes a list of sentences to return a single markov chain"""
    
    average_sentence_len = sum([len(headline.split(" ")) for headline in headlines])/len(headlines)

    all_text = " ".join(headlines).upper().split(" ")

    keys = {}
    for idx, word in enumerate(all_text):
        if (idx+2 > len(all_text)): break

        next_word = all_text[idx+1]
        try: keys[word].append(next_word)
        except KeyError: keys[word] = [next_word]
    
    markov = [np.random.choice(list(keys.keys()))]
    # stops when the markov is the average length of a headline or ends with a word that ended a real headline
    # not ((len(markov) < 3) and str(markov).endswith(".")) # for the sentence-enders?
    while (len(markov) < average_sentence_len):
        try: markov.append(np.random.choice(keys[markov[-1]]))
        except KeyError: break
    markov = " ".join(markov) # .replace(".", "") # re-add if we re-add the period system

    # for reference if you're curious about the library
    # https://predictivehacks.com/languagetool-grammar-and-spell-checker-in-python/
    # tool = lt.LanguageTool('en-US')
    # grammar_things = tool.check(markov)

    # mistakes = [text[rules.offset:rules.errorLength+rules.offset] for rules in grammar_things if rules.replacements]
    # corrections = [rules.replacements[0] for rules in grammar_things if rules.replacements]
    # start_pos = [rules.offset for rules in grammar_things if rules.replacements]  
    # end_pos = [rules.errorLength+rules.offset for rules in grammar_things if rules.replacements]

    # pprint(start_pos)
    # pprint(end_pos)

    return markov

test_case = scraper.get_headlines()
print("Orig:", make_Markovs(test_case))

def add_fakes(json):
	real_headlines = list(json['headlines'])
	for _ in range(len(real_headlines)):
		json['headlines'].append({ 'content': make_Markovs([info['content'] for info in real_headlines]), 'real': False })
	return json