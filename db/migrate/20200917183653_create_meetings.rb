class CreateMeetings < ActiveRecord::Migration[6.0]
  def change
    create_table :meetings do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :latitude
      t.string :longitude
      t.string :dayOfWeek
      t.string :timeOfDay
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end
  end
end
