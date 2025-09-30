
# @t8ngs/assert
> Biblioteca de asserções baseada no Chai para o framework T8ngs

Uma biblioteca de asserções construída sobre [Chai.assert](https://www.chaijs.com/guide/styles/#assert), com melhorias e recursos extras como planejamento de asserções.

## Instalação

Instale o pacote via npm ou yarn:

```sh
npm i @t8ngs/assert
# ou
yarn add @t8ngs/assert
```

## Uso com @t8ngs/runner

Você pode usar o plugin de asserções junto ao runner do T8ngs:

```ts
import { assert } from '@t8ngs/assert'
import { configure } from '@t8ngs/runner'

configure({
	plugins: [assert()]
})
```

Após configurar, o contexto dos testes terá a propriedade `assert` disponível:

```ts
test('deve comparar objetos', ({ assert }) => {
	assert.deepEqual({ id: 1 }, { id: 1 })
})
```

## Recursos

- Baseado em Chai.assert
- Planejamento de asserções (asserte quantas devem ser executadas)
- Integração nativa com o runner @t8ngs/runner

## Exemplo de planejamento de asserções

```ts
test('deve executar 2 asserções', ({ assert }) => {
	assert.plan(2)
	assert.isTrue(true)
	assert.isFalse(false)
})
```

## Documentação

Consulte a documentação do Chai para detalhes das asserções disponíveis: https://www.chaijs.com/api/assert/

---

MIT © T8ngs
