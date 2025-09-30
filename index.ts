/*
 * @t8ngs/assert
 *
 * (c) T8ngs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { PluginFn } from '@t8ngs/runner/types'
import { Test, TestContext } from '@t8ngs/runner/core'

import { Assert } from './src/assert.js'
import type { PluginConfig } from './src/types.js'

declare module '@t8ngs/runner/core' {
  interface TestContext {
    assert: Assert
  }
}

/**
 * Plugin for "@t8ngs/runner"
 */
export function assert(_options?: PluginConfig): PluginFn {
  return function () {
    TestContext.getter('assert', () => new Assert(), true)
    Test.executed(function (test: Test<any>, hasError) {
      /**
       * Do not evaluate assertions counts for regression tests.
       */
      if (test.options.isFailing) {
        return
      }

      if (!hasError) {
        test.context?.assert.assertions.validate()
      }
    })
  }
}

export { Assert }
