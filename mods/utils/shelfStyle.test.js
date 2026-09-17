import assert from 'node:assert/strict';
import test from 'node:test';
import { applyThumbnailEffects } from './shelfStyle.js';

test('clears a server-provided thumbnail shrink effect when disabled', () => {
  const shelfRenderer = {
    tvhtml5Style: {
      effects: {
        enlarge: true,
        shrink: true
      }
    }
  };

  applyThumbnailEffects(shelfRenderer, false, false);

  assert.deepEqual(shelfRenderer.tvhtml5Style.effects, {
    enlarge: true,
    shrink: false
  });
});

test('enables configured thumbnail effects on incomplete shelf styles', () => {
  const shelfRenderer = { tvhtml5Style: {} };

  applyThumbnailEffects(shelfRenderer, true, true);

  assert.deepEqual(shelfRenderer.tvhtml5Style.effects, {
    enlarge: false,
    shrink: true
  });
});
