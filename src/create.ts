import { join } from 'path'
import { pathExists, copy } from 'fs-extra'

export const create = async (targetDir: string, template: string) => {
  if (!(typeof template === 'string' && template.trim().length > 0)) {
    template = 'dal'
  }
  const files = join(__dirname, `../templates/${template}`)
  if (!(await pathExists(files))) {
    console.error(`template "${template}" not exist`)
    process.exit()
  }
  await copy(files, targetDir)
}
