import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Cards'

export default function KPISection({ kpis }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {kpis.map(k => (
                        <div key={k.id} className="p-3 bg-muted rounded-lg">
                            <p className="text-sm text-secondary">{k.label}</p>
                            <p className="text-lg font-semibold text-primary">{k.value}</p>
                            <p className="text-xs text-muted-foreground">{k.note}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

KPISection.propTypes = {
    kpis: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            note: PropTypes.string
        })
    ).isRequired
}
