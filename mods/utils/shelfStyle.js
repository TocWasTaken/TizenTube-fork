export function applyThumbnailEffects(shelfRenderer, disableEnlarging, enableShrinking) {
  if (!shelfRenderer.tvhtml5Style) shelfRenderer.tvhtml5Style = {};
  if (!shelfRenderer.tvhtml5Style.effects) shelfRenderer.tvhtml5Style.effects = {};

  if (disableEnlarging) shelfRenderer.tvhtml5Style.effects.enlarge = false;

  // YouTube can send shrink=true on search shelves. Always write the configured
  // value so disabling the option also clears that server-provided effect.
  shelfRenderer.tvhtml5Style.effects.shrink = enableShrinking;
}
