// @vitest-environment jsdom

import { describe, it, expect, vi } from "vitest"
import { render, screen } from '@testing-library/react'
import * as api from './apis/chairs.ts'
import App from './App.tsx'


vi.mock('./apis/chairs.ts')

// describe('',() => {
//   it('', () => {
//     render(<App/>)
//     expect(screen.getByText('Shop Our Latest Styles')).toBeInTheDocument()
//   })
// })