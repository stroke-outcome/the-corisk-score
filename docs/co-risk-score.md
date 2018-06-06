# CoRisk Score formulae

## version 0.2.x

- 75 years, NIHSS 7, Copeptin level 11.6: `1/(1+(e^(7.661−0.060×75−0.157×7−1.200×log₁₀ 11.6))) = 0.3133`

## version 0.3.x

- 75 years, NIHSS 7, Copeptin level 11.6, Thrombolysis 1: `1/(1+(e^(7.006 − (0.054×75) − (0.223×7) + (1.698*1) − (1.180×log₁₀ 11.6)))) = 0.1374`
- 75 years, NIHSS 7, Copeptin level 11.6, Thrombolysis 0: `1/(1+(e^(7.006 − (0.054×75) − (0.223×7) + (1.698*0) − (1.180×log₁₀ 11.6)))) = 0.4653`

## version 0.4.x

`1/(1+(e^(7.201586 − (0.05702 × age) − (0.22001 × NIHSS) + (2.05353 * thrombolsis) − (1.18481×log₁₀ copeptin level))))`

- { age: 75, nihss: 7, copeptin: 11.6, thrombolysis: 0 } = 46%
- { age: 75, nihss: 7, copeptin: 116, thrombolysis: 0 } = 74%
- { age: 75, nihss: 7, copeptin: 11.6, thrombolysis: 1 } = 10%
- { age: 75, nihss: 7, copeptin: 116, thrombolysis: 1 } = 27%
- { age: 23, nihss: 23, copeptin: 23, thrombolysis: 1 } = 21%
- { age: 23, nihss: 23, copeptin: 23, thrombolysis: 0 } = 68%
