Travel.create(
  nome: Faker::Travel::Airport.name(size: 'large', region: 'united_states'),
  data: Faker::Time.between_dates(from: Date.today - 1.year, to: Date.today + 1.year, period: :all),
  price: Faker::Number.decimal(l_digits: 2),
  desc: Faker::Science.tool,
)

puts Travel.last