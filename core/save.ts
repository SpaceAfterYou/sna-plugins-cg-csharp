import { join } from '@tauri-apps/api/path'
import { mkdir, writeTextFile } from '@tauri-apps/plugin-fs'
import { either, taskEither } from 'fp-ts'
import { pipe } from 'fp-ts/lib/function'

export async function save(name: string, data: string, ...paths: string[]) {
  const base = await join(...paths)

  const create = pipe(
    taskEither.tryCatch(() => mkdir(base, { recursive: true }), either.toError),
  )

  if (either.isRight(await create())) {
    const path = await join(base, `${name}.cs`)

    const write = pipe(
      taskEither.tryCatch(() => writeTextFile(path, data), either.toError),
    )

    if (either.isRight(await write())) {
      return true
    }
  }

  return false
}
