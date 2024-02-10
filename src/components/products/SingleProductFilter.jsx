import React from 'react'
import { Checkbox } from '@material-tailwind/react'
export default function SingleProductFilter({openFilter}) {
  return (
    <div className={`${openFilter ? "block" : "hidden"} flex justify-between bg-[#f8f8f8] p-10  mb-10`}>
				<ul className="  max-h-72 overflow-scroll  px-4">
					<h2>Color</h2>
					<li>
						<Checkbox color="blue" /> Blue
					</li>
					<li>
						<Checkbox color="red" /> Red
					</li>
					<li>
						<Checkbox color="green" />Green
					</li>
					<li>
						<Checkbox color="amber" />Amber
					</li>
					<li>
						<Checkbox color="teal" />Teal
					</li>
					<li>
						<Checkbox color="indigo" /> Indigo
					</li>
					<li>
						<Checkbox color="purple" /> Purple
					</li>
					<li>
						<Checkbox color="pink" /> Pink
					</li>
				</ul>
				<ul>
					SIZE
					<li><Checkbox  /> XS</li>
					<li><Checkbox  />X</li>
					<li><Checkbox  />M</li>
					<li><Checkbox  />L</li>
					<li><Checkbox  />XL</li>
				</ul>
				<ul>
					BRAND
					<li><Checkbox  />Ck</li>
					<li><Checkbox  />H&M</li>
					<li><Checkbox  />Kalles</li>
					<li><Checkbox  />Levi's</li>
					<li><Checkbox  />Monki</li>
					<li><Checkbox  />Nike</li>
				</ul>
				<ul>
					PRICE
					<li><Checkbox  />$1200+</li>
					<li><Checkbox  />$600-$1200</li>
					<li><Checkbox  />$300-$600</li>
					<li><Checkbox  />$150-$300</li>
					<li><Checkbox  />$50-$150</li>
					<li><Checkbox  />$10-$50</li>
				</ul>
			</div>
  )
}
