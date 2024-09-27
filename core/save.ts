import { fs } from '@tauri-apps/api'
import { join } from '@tauri-apps/api/path'
import { either, taskEither } from 'fp-ts'
import { pipe } from 'fp-ts/lib/function'

export async function save(name: string, data: string, ...paths: string[]) {
  const base = await join(...paths)

  const create = pipe(
    taskEither.tryCatch(() => fs.createDir(base, { recursive: true }), either.toError),
  )

  if (either.isRight(await create())) {
    const path = await join(base, `${name}.cs`)

    const write = pipe(
      taskEither.tryCatch(() => fs.writeTextFile(path, data), either.toError),
    )

    if (either.isRight(await write())) {
      return true
    }
  }

  return false
}
