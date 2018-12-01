%%bigquery --project $project_id police_reported_drug_involvement
SELECT  police_reported_drug_involvement, person_type_name, injury_severity_name, count(*) count
FROM `bigquery-public-data.nhtsa_traffic_fatalities.person_2016`
WHERE police_reported_drug_involvement not like 'Not Reported' and
police_reported_drug_involvement not like 'Not Applicable' and
police_reported_drug_involvement not like 'Unknown (Police Reported)'
AND injury_severity_name not like 'Died Prior to Crash'
AND injury_severity_name not like 'Unknown'
group by police_reported_drug_involvement, person_type_name,injury_severity_name
order by count(*) desc, person_type_name, police_reported_drug_involvement



alt.Chart(police_reported_alcohol_involvement).mark_bar().encode(
    x=alt.X('sum(count)', axis=alt.Axis(title='Ratio in all types of injuries'), stack="normalize"),
    y=alt.Y('police_reported_alcohol_involvement', axis=alt.Axis(title='Police reported alcohols involvement')),
    order='order:N',
    color=alt.Color('injury_severity_name',
                    legend=alt.Legend(title="Injury severity"),
                    scale=alt.Scale(
                      range=['#d73027', '#f46d43', '#fdae61', '#ffffbf', '#ffffbf', '#4575b4']),
                      sort=['Fatal Injury (K)', 'Suspected Serious Injury (A)', 'Suspected Minor Injury (B)',
                         'Possible Injury (C)', 'Injured, Severity Unknown (U) (Since 1978)', 'No Apparent Injury (O)']),
    tooltip=['police_reported_alcohol_involvement', 'injury_severity_name', 'sum(count)']
).transform_calculate(
    order="if(datum.injury_severity_name === 'Fatal Injury (K)', 0, \
           if(datum.injury_severity_name === 'Suspected Serious Injury (A)', 1, \
           if(datum.injury_severity_name === 'Suspected Minor Injury (B)', 2, \
           if(datum.injury_severity_name === 'Possible Injury (C)', 3, \
           if(datum.injury_severity_name === 'Injured, Severity Unknown (U) (Since 1978)', 4, \
           if(datum.injury_severity_name === 'No Apparent Injury (O)', 5, 6))))))"
).properties(width = 600)
