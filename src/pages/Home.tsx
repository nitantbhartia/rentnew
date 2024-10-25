import { ArrowRight, Building2, ClipboardCheck, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The Complete Rental Management Solution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Screen tenants, manage rental applications, and streamline your property management process all in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started Free
              </Link>
              <Link
                to="/screening"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
              >
                Learn about screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Comprehensive Solution
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage rentals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From tenant screening to lease signing, we provide all the tools you need to manage your rental properties efficiently.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Shield className="h-5 w-5 flex-none text-blue-600" />
                Tenant Screening
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Comprehensive background checks, credit reports, and eviction history verification.
                </p>
                <p className="mt-6">
                  <Link to="/screening" className="text-sm font-semibold leading-6 text-blue-600">
                    Learn more <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Building2 className="h-5 w-5 flex-none text-blue-600" />
                Property Listings
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  List and manage your properties with detailed information and virtual tours.
                </p>
                <p className="mt-6">
                  <Link to="/properties" className="text-sm font-semibold leading-6 text-blue-600">
                    View properties <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <ClipboardCheck className="h-5 w-5 flex-none text-blue-600" />
                Application Management
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Track and manage rental applications efficiently with our streamlined process.
                </p>
                <p className="mt-6">
                  <Link to="/applications" className="text-sm font-semibold leading-6 text-blue-600">
                    View applications <ArrowRight className="inline-block ml-1 h-4 w-4" />
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to streamline your rental process?
            <br />
            Get started today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/register"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100"
            >
              Get started free
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact sales <ArrowRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}