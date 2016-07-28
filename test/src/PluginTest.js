import { assert }             from 'chai';

import PluginAnalyzeThreshold from '../../src/PluginAnalyzeThreshold';

const pluginData =
[
   { name: 'ESM', PluginClass: PluginAnalyzeThreshold }
];

pluginData.forEach((plugin) =>
{
   suite(`(${plugin.name}) plugin:`, () =>
   {
      suite('initialize:', () =>
      {
         const instance = new plugin.PluginClass();

         test('plugin was object', () =>
         {
            assert.isObject(instance);
         });

         test('plugin function onConfigure is exported', () =>
         {
            assert.isFunction(instance.onConfigure);
         });

         test('plugin function onAnalyzeModule is exported', () =>
         {
            assert.isFunction(instance.onAnalyzeModule);
         });

         test('plugin function onAnalyzeProject is exported', () =>
         {
            assert.isFunction(instance.onAnalyzeProject);
         });
      });

      suite('method invocation:', () =>
      {
         const instance = new plugin.PluginClass();

         test('plugin throws on empty event data', () =>
         {
            assert.throws(() => { instance.onConfigure(); });
         });

         test('plugin does not throw on proper event data', () =>
         {
            assert.doesNotThrow(() => { instance.onConfigure({ data: { options: {}, settings: {} } }); });
         });

         test('plugin passes back syntax data', () =>
         {
            const event = { data: { options: {}, settings: {} } };
            instance.onConfigure(event);
//            assert.strictEqual(event.data.settings.noCoreSize, false);
         });
      });
   });
});