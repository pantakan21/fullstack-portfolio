import yaml from 'js-yaml'

export function parseContent(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  return yaml.load(match[1])
}
