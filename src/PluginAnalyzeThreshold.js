/**
 * Provides default project / module analysis of threshold metrics.
 */
export default class PluginAnalyzeThreshold
{
   // ESComplexAnalyze plugin callbacks -----------------------------------------------------------------------------

   /**
    * Loads any default settings that are not already provided by any user options.
    *
    * @param {object}   ev - escomplex plugin event data.
    *
    * The following options are:
    * ```
    * ```
    */
   onConfigure(ev)
   {
      ev.data.settings.thresholds = typeof ev.data.options.thresholds === 'object' ?
       ev.data.options.thresholds : s_DEFAULT_THRESHOLDS;
   }

   /**
    * @param {object}   ev - escomplex plugin event data.
    */
   onAnalyzeModule()
   {
   }

   /**
    * @param {object}   ev - escomplex plugin event data.
    */
   onAnalyzeProject()
   {
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines default thresholds for severity levels matching the XML checkstyle format.
 * error levels: info, warning, error
 *
 * Entries may include `classReport`, `methodReport`, `moduleReport` that each define an object hash of threshold
 * object hashes. The key of each threshold hash is the entry key to compare against the `info, warning, error` values.
 * By default the order flows left to right using greater than comparisons. An optional entry is `_test` which is a
 * string defining the comparison operations with the following supported options, `<`, `<=`, `>`, and `>=`.
 *
 * @type {{classReport: {maintainability: {_test: string, info: number, warning: number, error: number}}, methodReport: {cyclomatic: {info: number, warning: number, error: number}, [halstead.difficulty]: {info: number, warning: number, error: number}}, moduleReport: {maintainability: {_test: string, info: number, warning: number, error: number}}}}
 * @ignore
 */
const s_DEFAULT_THRESHOLDS =
{
   classReport:
   {
      maintainability: { _test: '<', info: 115, warning: 100, error: 90 }
   },
   methodReport:
   {
      'cyclomatic': { info: 3, warning: 7, error: 12 },
      'halstead.difficulty': { info: 8, warning: 13, error: 20 }
   },
   moduleReport:
   {
      maintainability: { _test: '<', info: 115, warning: 100, error: 90 }
   }
};
