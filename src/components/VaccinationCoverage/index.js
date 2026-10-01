// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${number / 1000}k`
    }

    return number.toString()
  }

  return (
    <div>
      <h1 className="heading">Vaccination Coverage</h1>

      <BarChart width={900} height={400} data={vaccinationCoverageDetails}>
        <XAxis dataKey="vaccineDate" />

        <YAxis tickFormatter={dataFormatter} />

        <Legend />

        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#1f77b4"
          radius={[10, 10, 0, 0]}
        />

        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#fd7f0e"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
