import request from 'request-promise'
import cheerio from 'cheerio'

let ranking = []
let $		= undefined

const url 		    = serie => `http://globoesporte.globo.com/futebol/brasileirao-serie-${serie}`
const transformFn   = function(body) { return $ = cheerio.load(body) }
const withOptions   = serie => ({ method: 'GET', uri: url(serie), transform: transformFn })
const searchPattern = (index, col) => `.tabela-pontos > tbody tr:nth-child(${index + 1}) > td:nth-child(${col})` 
const pushToList    = function(index, element) {
	let row = $(element)
	
	return ranking.push({
		posicao    : row.find('.tabela-times-posicao').text(),
		time       : row.find('.tabela-times-time > a').attr('title'),
		pontos     : parseInt($(searchPattern(index, 1)).text()),
		jogos      : parseInt($(searchPattern(index, 2)).text()),
		vitorias   : parseInt($(searchPattern(index, 3)).text()),
		empates    : parseInt($(searchPattern(index, 4)).text()),
		derrotas   : parseInt($(searchPattern(index, 5)).text()),
		golsPro    : parseInt($(searchPattern(index, 6)).text()),
		golsContra : parseInt($(searchPattern(index, 7)).text()),
		saldoGols  : parseInt($(searchPattern(index, 8)).text()),
		percentual : parseFloat($(searchPattern(index, 9)).text())
	})	
}

const getRanking = $ => $('.tabela-times > tbody tr').each(pushToList)

const search = serie => request(withOptions(serie))
	.then(getRanking)
	.then(() => { console.log('You have sucessfull in your search') })

export default function(serie) {
	return search(serie)
}