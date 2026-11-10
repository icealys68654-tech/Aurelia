'use client'

import { FormEvent, useState } from 'react'

const stages = [
  { number: '01', title: 'Input pool', detail: 'Validate the question and confirm user intent.', state: 'Ready', symbol: '&r == xora#FFFFFF' },
  { number: '02', title: 'Compute layer', detail: 'Prepare a bounded research plan.', state: 'Idle', symbol: 'platonicshapes(1, 1)' },
  { number: '03', title: 'Linking / reasoning', detail: 'Use only explicitly configured, approved providers.', state: 'Idle', symbol: 'rainbowtables(PI)' },
  { number: '04', title: 'Execution layer', detail: 'Present cited, safe-to-render results.', state: 'Idle', symbol: 'pixels(r)' },
]

export function ResearchWorkbench() {
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState('Research is unavailable: no approved search provider or model backend is configured. Your query will not be sent.')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!query.trim()) {
      setMessage('Enter a research question. No data leaves this browser.')
      return
    }
    setMessage('Research backend is not configured. Your question was kept in this browser and was not sent.')
  }

  return (
    <section className="research-workbench" aria-labelledby="workbench-title">
      <div className="workbench-main">
        <div className="workbench-title-row"><div><div className="eyebrow">Custom research agent</div><h2 id="workbench-title">Start with a question.</h2></div><span className="connection-state"><i /> Not connected</span></div>
        <p className="workbench-copy">When an approved provider is configured, AURELIA can organize public research with source links and clear coverage notes. This preview does not scrape websites or contact a search service.</p>
        <form className="research-query" onSubmit={submit}>
          <label className="sr-only" htmlFor="research-question">Research question</label>
          <input id="research-question" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What would you like to explore?" maxLength={500} />
          <button type="submit" className="button primary">Prepare query <span aria-hidden="true">→</span></button>
        </form>
        <p className="workbench-message" role="status" aria-live="polite">{message}</p>
        <div className="safety-note"><strong>Safe by design</strong><span>Approved APIs only · bounded requests · source citations · no page scripts or access-control bypass</span></div>
      </div>
      <ol className="agent-stages" aria-label="Research agent workflow">
        {stages.map((stage) => <li className="agent-stage" key={stage.number}><span className="stage-number">{stage.number}</span><div className="stage-content"><div className="stage-heading"><strong>{stage.title}</strong><span className={`stage-state ${stage.state === 'Ready' ? 'is-ready' : ''}`}>{stage.state}</span></div><code>{stage.symbol}</code><p>{stage.detail}</p></div></li>)}
      </ol>
    </section>
  )
}
